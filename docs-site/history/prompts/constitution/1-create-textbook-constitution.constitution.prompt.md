---
id: 1
title: Create Textbook Constitution
stage: constitution
date: 2025-12-17
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: pc
command: /sp.constitution
labels: [constitution, textbook, physical-ai, humanoid-robotics]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

Create a constitution for a textbook project titled
"Physical AI & Humanoid Robotics".

Context:
The goal is to create an AI-native textbook to teach
Physical AI and Humanoid Robotics.

Target Audience:
- Beginners to Intermediate learners

Course Focus:
- Physical AI and embodied intelligence
- Bridging the digital brain with the physical body
- Hands-on learning using simulations and labs

Course Modules (must align exactly):
1. ROS 2 – Robotic Nervous System
2. Gazebo & Unity – Digital Twin Simulation
3. NVIDIA Isaac – AI Robot Brain
4. Vision-Language-Action (VLA)
5. Capstone – Autonomous Humanoid Robot

Technology Stack:
- Docusaurus for documentation
- Spec-Kit Plus with Claude Code
- RAG chatbot for book Q&A
- FastAPI, OpenAI Agents/ChatKit, Neon Postgres, Qdrant
- Optional: Better Auth for login
- Content personalization and Urdu translation

Include these sections only:
1. Vision
2. Core Principles
3. Success Criteria
4. Constraints
5. Stakeholders
6. Brand Voice

Keep the language clear, practical, and beginner-friendly.

## Response snapshot

Created a comprehensive constitution for the "Physical AI & Humanoid Robotics" textbook project with the following sections:

1. Vision - Outlining the goal to create an AI-native textbook that makes Physical AI accessible
2. Core Principles - Six key principles covering accessibility, hands-on learning, modular curriculum, technology alignment, AI integration, and global reach
3. Success Criteria - Measurable outcomes for student learning and content effectiveness
4. Constraints - Boundaries for content suitability and technical requirements
5. Stakeholders - Various groups who will benefit from the textbook
6. Brand Voice - Educational, encouraging, and technically precise tone

The constitution establishes governance for the entire textbook development process.

## Outcome

- ✅ Impact: Created foundational governance document for textbook project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md, created history/prompts/constitution/1-create-textbook-constitution.constitution.prompt.md
- 🔁 Next prompts: Follow-up work on spec, plan, and tasks based on this constitution
- 🧠 Reflection: The constitution successfully captures the essence of an AI-native textbook for Physical AI & Humanoid Robotics with clear principles for development

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin creating the feature specification based on this constitution