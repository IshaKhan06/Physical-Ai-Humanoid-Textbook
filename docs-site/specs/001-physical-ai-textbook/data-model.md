# Data Model: Physical AI & Humanoid Robotics Textbook

## Entity: Learner Profile

**Description**: Represents a user's background, skill level, learning preferences, and progress through the curriculum

**Fields**:
- `id` (string, required): Unique identifier for the learner
- `email` (string, required): User's email address for authentication
- `name` (string, required): Full name of the learner
- `background` (string, required): Programming/robotics experience level (beginner, intermediate, advanced)
- `learning_goals` (array of strings): Specific goals the learner wants to achieve
- `preferred_language` (string): Default language preference (en, ur, etc.)
- `personalization_enabled` (boolean): Whether content personalization is active
- `created_at` (datetime): Account creation timestamp
- `updated_at` (datetime): Last profile update timestamp

**Validation rules**:
- Email must be valid format
- Background must be one of: 'beginner', 'intermediate', 'advanced'
- Preferred language must be supported (en, ur initially)

## Entity: Textbook Module

**Description**: Organized content unit covering specific Physical AI topics with theoretical content, hands-on labs, and assessments

**Fields**:
- `id` (string, required): Unique identifier for the module
- `title` (string, required): Display title of the module
- `slug` (string, required): URL-friendly identifier
- `module_number` (integer, required): Sequential number in curriculum (1-5)
- `week_number` (integer, required): Week in 13-week structure
- `content` (string, required): Markdown content of the module
- `content_ur` (string, optional): Urdu translation of content
- `hands_on_labs` (array of objects): Lab exercises with instructions and objectives
- `learning_objectives` (array of strings): What the learner should know after completion
- `prerequisites` (array of strings): What knowledge is required before this module
- `duration_hours` (number): Estimated time to complete
- `created_at` (datetime): Creation timestamp
- `updated_at` (datetime): Last update timestamp

**Validation rules**:
- Module number must be between 1-5
- Week number must be between 1-13
- Content must be in valid markdown format

## Entity: Learning Path

**Description**: Structured sequence of modules and activities tailored to individual learner needs and goals

**Fields**:
- `id` (string, required): Unique identifier for the learning path
- `learner_id` (string, required): Reference to Learner Profile
- `modules_order` (array of strings): Ordered list of module IDs in the path
- `personalized` (boolean): Whether path is personalized based on learner profile
- `progress` (object): Tracking completion status for each module
- `estimated_completion_weeks` (number): Time to complete the path
- `created_at` (datetime): Creation timestamp
- `updated_at` (datetime): Last update timestamp

**Validation rules**:
- Learner ID must reference existing learner
- Modules in order must all exist in the system
- Progress object must have valid completion states

## Entity: Capstone Project

**Description**: Comprehensive final project integrating all learned concepts to build an autonomous humanoid robot

**Fields**:
- `id` (string, required): Unique identifier for the capstone project
- `title` (string, required): Display title of the project
- `description` (string, required): Detailed description of the project
- `requirements` (array of strings): Technical requirements and specifications
- `steps` (array of objects): Sequential steps to complete the project
- `evaluation_criteria` (array of strings): How the project will be evaluated
- `resources` (array of strings): Additional resources needed
- `duration_weeks` (number): Estimated time to complete
- `created_at` (datetime): Creation timestamp
- `updated_at` (datetime): Last update timestamp

**Validation rules**:
- Requirements must reference concepts from previous modules
- Steps must be in logical order

## Entity: Chat Query History

**Description**: Stores user queries and system responses for the RAG chatbot

**Fields**:
- `id` (string, required): Unique identifier for the query
- `learner_id` (string, required): Reference to Learner Profile
- `query_text` (string, required): The original question asked
- `response_text` (string, required): The AI-generated response
- `context_type` (string, required): 'full-book' or 'selected-text'
- `source_modules` (array of strings): Which modules were referenced in the response
- `timestamp` (datetime): When the query was made
- `satisfaction_rating` (integer, optional): User rating of the response (1-5)

**Validation rules**:
- Context type must be either 'full-book' or 'selected-text'
- Satisfaction rating must be between 1-5 if provided

## Entity: Vector Embedding

**Description**: Stores vector representations of textbook content for RAG retrieval

**Fields**:
- `id` (string, required): Unique identifier for the embedding
- `content_id` (string, required): Reference to the content being embedded
- `content_type` (string, required): 'module', 'section', 'lab', 'capstone'
- `text_chunk` (string, required): The original text that was embedded
- `embedding_vector` (array of numbers, required): The vector representation
- `metadata` (object): Additional information about the content chunk
- `created_at` (datetime): Creation timestamp

**Validation rules**:
- Content type must be one of the allowed values
- Embedding vector must have appropriate dimensions for the model used