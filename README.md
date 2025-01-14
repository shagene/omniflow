# OmniFlow

## Overview
OmniFlow is an AI-powered business operations platform that automates and optimizes essential tasks for small businesses. The platform leverages intelligent agents to handle day-to-day operations, enabling business owners to focus on growth and customer relationships.

## Features
- Task Management Agent
- Lead Generation
- Customer Relationship Management
- Marketing Automation
- Business Intelligence
- Operations Management

## Technology Stack
- Frontend: Remix, TailwindCSS, ShadCN UI
- Backend: FastAPI, Python
- Database: MongoDB
- Cache: Redis
- Storage: MinIO
- AI Services: LangChain, OpenAI/Anthropic

## Prerequisites
- Docker and Docker Compose
- Node.js (LTS)
- Python 3.12+
- pnpm
- Poetry

## Getting Started

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/omniflow.git
cd omniflow

# Initialize development environment
make setup

# Start services
make start
```

### Development
The project uses Docker for local development. Key commands:

```bash
# Start development environment
make start

# Stop development environment
make stop

# Clean up environment
make clean

# Run tests
make test

# Run linting
make lint
```

### Project Structure
```
omniflow/
├── frontend/          # Remix application
├── backend/          # FastAPI application
├── docker/           # Docker configurations
├── docs/            # Documentation
└── scripts/         # Utility scripts
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support, please open an issue in the GitHub repository.