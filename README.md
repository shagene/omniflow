# OmniFlow

[Previous sections remain the same until Getting Started]

## Getting Started

### Documentation
Detailed documentation can be found in the `docs` directory:
- [Project Tracking](docs/project/tracking.md) - Current project status and roadmap
- [Container Setup](docs/development/containers.md) - Development container configuration and setup

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
The project uses Docker for local development. Development servers run on:
- Frontend (Remix + Vite): http://localhost:5173 (dev), http://localhost:3000 (prod)
- Backend (FastAPI): http://localhost:8000
- MinIO Console: http://localhost:9001

Key commands:
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