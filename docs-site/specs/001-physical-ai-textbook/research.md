# Research: Physical AI & Humanoid Robotics Textbook

## Technology Stack Research

### Docusaurus Documentation Architecture

**Decision**: Use Docusaurus v3.x with TypeScript configuration for textbook delivery
**Rationale**: Docusaurus is specifically designed for documentation sites, offers excellent search capabilities, supports versioning, and has strong plugin ecosystem. TypeScript configuration provides type safety for custom components.
**Alternatives considered**:
- GitBook (limited customization, commercial)
- Hugo (steeper learning curve, less interactive)
- Custom React app (more complex to maintain)

### Claude Code Workflow for Writing Chapters

**Decision**: Integrate Claude Code with Docusaurus markdown workflow
**Rationale**: Claude Code can generate, edit, and maintain markdown content efficiently. Combined with Spec-Kit Plus, it enables spec-driven content generation with consistent quality.
**Alternatives considered**:
- Manual writing only (time-intensive, inconsistent)
- Other AI tools (less integration with existing workflow)

### RAG Chatbot Architecture

**Decision**: FastAPI backend with OpenAI SDK, Neon Postgres for metadata, Qdrant for vector storage
**Rationale**:
- FastAPI provides excellent async performance and OpenAPI docs
- OpenAI SDK offers reliable embeddings and chat completion
- Neon provides serverless Postgres with auto-scaling
- Qdrant is purpose-built for vector similarity search
**Alternatives considered**:
- LangChain (more complex, potential vendor lock-in)
- Pinecone (commercial, less control)
- Weaviate (similar capabilities but less proven for this use case)

### Better Auth Implementation

**Decision**: Use Better Auth for authentication and user management
**Rationale**: Better Auth provides simple, secure authentication with good Docusaurus integration. Supports social logins and custom providers.
**Alternatives considered**:
- NextAuth.js (only for Next.js, not pure Docusaurus)
- Auth0 (commercial, overkill for this project)
- Custom auth (more complex, security concerns)

### Content Personalization & Translation

**Decision**: Implement client-side personalization with server-side content adaptation
**Rationale**: Client-side buttons can toggle personalization and translation while server-side processing adapts content based on user profile.
**Alternatives considered**:
- Pure server-side (less responsive UI)
- Pure client-side (security concerns for personalization)

## Integration Patterns

### Full-book vs Selected Text Q&A

**Decision**: Implement two separate RAG retrieval strategies
- Full-book: Retrieve from entire textbook corpus
- Selected text: Retrieve only from user-highlighted content
**Rationale**: Different use cases require different context scopes. Users may want either comprehensive answers or focused explanations.
**Implementation**: Query parameter or separate endpoints to specify context scope.

### Deployment Strategy

**Decision**: Deploy to Vercel for dynamic features, GitHub Pages for static content
**Rationale**:
- Vercel: Better for server-side rendering and API routes
- GitHub Pages: Good for static content delivery
**Alternative**: Single deployment to Vercel to simplify architecture

## Architecture Decisions Summary

1. **Frontend**: Docusaurus v3.x with TypeScript
2. **Backend**: FastAPI with async support
3. **Authentication**: Better Auth
4. **Vector Database**: Qdrant Cloud Free Tier
5. **Relational Database**: Neon Serverless Postgres
6. **AI SDKs**: OpenAI Agents/ChatKit SDKs
7. **Deployment**: Vercel