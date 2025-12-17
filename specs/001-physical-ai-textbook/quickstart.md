# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Development Environment Setup

### Prerequisites
- Node.js 18+
- Python 3.9+
- Git
- Access to OpenAI API key
- Access to Qdrant Cloud (free tier)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PHYSICAL-AI-BOOK
   git checkout 001-physical-ai-textbook
   ```

2. **Install Docusaurus dependencies**
   ```bash
   cd frontend  # or main project directory
   npm install
   ```

3. **Set up Python backend**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install fastapi uvicorn python-multipart openai psycopg3[pool] better-auth
   ```

4. **Configure environment variables**
   Create `.env` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   QDRANT_URL=your_qdrant_cluster_url
   QDRANT_API_KEY=your_qdrant_api_key
   NEON_DB_URL=your_neon_database_url
   BETTER_AUTH_SECRET=your_auth_secret
   ```

## Running the Application

### Development Mode

1. **Start the backend API server**
   ```bash
   cd backend
   uvicorn main:app --reload --port 8000
   ```

2. **Start the Docusaurus frontend**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - API docs: http://localhost:8000/docs
   - API redoc: http://localhost:8000/redoc

## Key Features Implementation

### Adding a New Textbook Module

1. Create a new markdown file in `docs/modules/`:
   ```bash
   # Example: docs/modules/ros2-introduction.md
   ---
   id: ros2-introduction
   title: ROS 2 Introduction
   sidebar_label: ROS 2 Basics
   module_number: 1
   week_number: 1
   ---

   # Introduction to ROS 2

   Content goes here...
   ```

2. Update the sidebar configuration in `sidebars.js`

3. Add the module to the database via the admin API or directly

### Implementing Personalization

The personalization system works by:
1. Collecting user background during signup
2. Storing preferences in the user profile
3. Using profile data to adapt content delivery
4. Providing a toggle button to enable/disable personalization

### Adding Urdu Translation

1. Add Urdu content to the module data model
2. Implement language toggle in the UI
3. Use the `content_ur` field in the module entity for Urdu translation

### Working with the RAG Chatbot

The RAG system processes textbook content by:
1. Chunking text into semantic segments
2. Creating vector embeddings using OpenAI
3. Storing embeddings in Qdrant vector database
4. Retrieving relevant content based on user queries
5. Generating responses using OpenAI's chat completion

## Deployment

### To Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `build/`

### To GitHub Pages

1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages using GitHub Actions or manually

## Claude Code Integration

Use Claude Code for:
- Writing and editing textbook content
- Generating code examples for modules
- Creating hands-on lab instructions
- Maintaining consistency across modules

## Troubleshooting

### Common Issues

- **API rate limits**: Ensure you have sufficient OpenAI quota
- **Vector search slow**: Check Qdrant cluster performance
- **Authentication errors**: Verify Better Auth configuration
- **Translation missing**: Check that Urdu content exists for the module

### Development Tips

- Use the API documentation at `/docs` to test endpoints
- Check the database directly for user and content data
- Monitor the logs for API request/response details
- Use the search endpoint to verify vector indexing