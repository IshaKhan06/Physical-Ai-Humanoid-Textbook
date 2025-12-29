import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physical AI & Humanoid Robotics',
    description: (
      <>
        Comprehensive textbook covering the integration of AI and robotics for physical systems.
      </>
    ),
  },
  {
    title: 'ROS 2 Integration',
    description: (
      <>
        Learn how to use ROS 2 as the nervous system for your robotic applications.
      </>
    ),
  },
  {
    title: 'AI-First Robotics',
    description: (
      <>
        Explore how AI technologies like Vision-Language-Action models are transforming robotics.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <div className={styles.featureIcon}>🤖</div>}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-bottom--xl">
          <h2 className={styles.featuresHeading}>Core Course Subjects</h2>
          <p className={styles.featuresSubheading}>Explore the fundamental topics covered in this comprehensive textbook</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}