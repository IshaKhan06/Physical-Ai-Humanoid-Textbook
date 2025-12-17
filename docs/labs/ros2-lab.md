# ROS 2 Publisher-Subscriber Pattern: Creating Your First Robot Node

## Learning Objectives

After completing this chapter, you will be able to:
- Create ROS 2 packages and nodes from scratch
- Implement the publisher-subscriber communication pattern
- Design custom message types for robotic applications
- Test and debug ROS 2 nodes using built-in tools
- Integrate your nodes with the broader ROS 2 ecosystem

## Introduction

In the previous section, we learned that ROS 2 serves as the nervous system of robotic platforms. The publisher-subscriber pattern is one of the fundamental communication mechanisms in ROS 2, enabling nodes to exchange data asynchronously. In this hands-on lab, you'll create a simple robot node that publishes sensor data and another that subscribes to process this information.

## Prerequisites

Before starting this lab, ensure you have:
- ROS 2 installed (Humble Hawksbill or later recommended)
- Basic knowledge of C++ or Python
- Completed the ROS 2 fundamentals tutorial
- A working ROS 2 development environment

## Creating a ROS 2 Package

First, let's create a new ROS 2 package for our robot nodes:

```bash
# Navigate to your ROS 2 workspace
cd ~/ros2_ws/src

# Create a new package with dependencies
ros2 pkg create --build-type ament_cmake --dependencies rclcpp rclpy std_msgs sensor_msgs my_robot_pkg
```

This creates a new package called `my_robot_pkg` with dependencies on common ROS 2 packages.

## Implementing a Publisher Node

Let's create a simple publisher that simulates sensor data from a robot:

**Python Implementation (in `my_robot_pkg/my_robot_pkg/sensor_publisher.py`):**

```python
#!/usr/bin/env python3

import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from sensor_msgs.msg import LaserScan
import random

class SensorPublisher(Node):
    def __init__(self):
        super().__init__('sensor_publisher')
        self.publisher_ = self.create_publisher(LaserScan, 'robot/laser_scan', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = LaserScan()
        msg.header.stamp = self.get_clock().now().to_msg()
        msg.header.frame_id = 'laser_frame'

        # Simulate laser scan data
        msg.angle_min = -1.57  # -90 degrees
        msg.angle_max = 1.57   # 90 degrees
        msg.angle_increment = 0.01
        msg.range_min = 0.1
        msg.range_max = 10.0

        # Generate random range values (simulating obstacles)
        ranges = []
        for i in range(314):  # (1.57 - (-1.57)) / 0.01 = 314
            ranges.append(random.uniform(0.5, 5.0))
        msg.ranges = ranges

        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing laser scan data: {len(msg.ranges)} ranges')

def main(args=None):
    rclpy.init(args=args)
    sensor_publisher = SensorPublisher()
    rclpy.spin(sensor_publisher)
    sensor_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Implementing a Subscriber Node

Now let's create a subscriber that processes the sensor data:

**Python Implementation (in `my_robot_pkg/my_robot_pkg/obstacle_detector.py`):**

```python
#!/usr/bin/env python3

import rclpy
from rclpy.node import Node
from sensor_msgs.msg import LaserScan
from std_msgs.msg import String

class ObstacleDetector(Node):
    def __init__(self):
        super().__init__('obstacle_detector')
        self.subscription = self.create_subscription(
            LaserScan,
            'robot/laser_scan',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning
        self.publisher_ = self.create_publisher(String, 'robot/obstacle_alert', 10)

    def listener_callback(self, msg):
        # Check for obstacles within 1 meter
        obstacles = []
        for i, range_val in enumerate(msg.ranges):
            if 0.1 < range_val < 1.0:  # Valid range and within 1 meter
                angle = msg.angle_min + i * msg.angle_increment
                obstacles.append((angle, range_val))

        if obstacles:
            # Publish obstacle alert
            alert_msg = String()
            alert_msg.data = f"Obstacles detected at {len(obstacles)} positions"
            self.publisher_.publish(alert_msg)
            self.get_logger().info(f'Obstacle Alert: {alert_msg.data}')
        else:
            self.get_logger().info('No obstacles detected in 1m range')

def main(args=None):
    rclpy.init(args=args)
    obstacle_detector = ObstacleDetector()
    rclpy.spin(obstacle_detector)
    obstacle_detector.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Building and Running the Nodes

Before running our nodes, we need to make them executable and build the package:

```bash
# Make the Python files executable
chmod +x my_robot_pkg/my_robot_pkg/sensor_publisher.py
chmod +x my_robot_pkg/my_robot_pkg/obstacle_detector.py

# Build the package
cd ~/ros2_ws
colcon build --packages-select my_robot_pkg
source install/setup.bash
```

Now we can run our nodes in separate terminals:

**Terminal 1:**
```bash
ros2 run my_robot_pkg sensor_publisher
```

**Terminal 2:**
```bash
ros2 run my_robot_pkg obstacle_detector
```

## Testing with ROS 2 Tools

ROS 2 provides powerful tools for debugging and monitoring your nodes:

```bash
# List all active nodes
ros2 node list

# Echo messages on a topic
ros2 topic echo /robot/laser_scan sensor_msgs/msg/LaserScan

# Check topic information
ros2 topic info /robot/laser_scan

# Visualize the node graph
rqt_graph
```

## Advanced Topic: Custom Message Types

For more complex robotic applications, you might need custom message types. Let's create a custom message for robot status:

1. Create a `msg` directory in your package:
```bash
mkdir -p my_robot_pkg/msg
```

2. Create `RobotStatus.msg`:
```
# Custom message for robot status
string robot_name
bool is_operational
float32 battery_level
int32 error_code
string status_message
```

3. Update `CMakeLists.txt` to include the custom message:
```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "msg/RobotStatus.msg"
  DEPENDENCIES std_msgs
)
```

4. Use the custom message in your nodes:
```python
from my_robot_pkg.msg import RobotStatus

# In your node
status_pub = self.create_publisher(RobotStatus, 'robot/status', 10)

# Create and publish a status message
status_msg = RobotStatus()
status_msg.robot_name = 'MyRobot1'
status_msg.is_operational = True
status_msg.battery_level = 85.5
status_msg.error_code = 0
status_msg.status_message = 'Operational'
```

## Troubleshooting Common Issues

1. **Nodes can't communicate**: Ensure both nodes are on the same ROS domain ID
2. **Permission errors**: Make sure your Python files are executable
3. **Import errors**: Check that your `setup.py` and `CMakeLists.txt` are properly configured
4. **Topic not found**: Verify topic names match exactly between publisher and subscriber

## Lab Exercise: Extending the Robot Node

Now that you've implemented the basic publisher-subscriber pattern, try extending the functionality:

1. Add a service to request specific sensor data on demand
2. Implement a parameter server to configure sensor parameters at runtime
3. Create a launch file to start both nodes simultaneously
4. Add visualization using RViz to display sensor data

## Summary

In this chapter, you learned to:
- Create ROS 2 packages with proper dependencies
- Implement publisher-subscriber communication patterns
- Work with standard ROS 2 message types
- Use ROS 2 tools for debugging and monitoring
- Design custom message types for specific applications

This foundational knowledge of ROS 2 communication patterns will be essential as you progress through more complex robotic applications in subsequent modules.