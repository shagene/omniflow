.PHONY: help setup start stop clean test lint

# Display help information
help:
	@echo "OmniFlow Development Commands:"
	@echo "make setup     - Initialize development environment"
	@echo "make start     - Start all services"
	@echo "make stop      - Stop all services"
	@echo "make clean     - Clean up development environment"
	@echo "make test      - Run all tests"
	@echo "make lint      - Run linting"

# Setup development environment
setup:
	@echo "Setting up development environment..."
	cp .env.example .env
	docker compose pull
	cd frontend && pnpm install
	cd backend && poetry install

# Start development environment
start:
	@echo "Starting services..."
	docker compose up -d

# Stop development environment
stop:
	@echo "Stopping services..."
	docker compose down

# Clean development environment
clean:
	@echo "Cleaning up..."
	docker compose down -v
	find . -type d -name "__pycache__" -exec rm -r {} +
	find . -type d -name "node_modules" -exec rm -r {} +
	find . -type d -name ".cache" -exec rm -r {} +
	find . -type f -name "*.pyc" -delete

# Run tests
test:
	@echo "Running tests..."
	cd backend && poetry run pytest
	cd frontend && pnpm test

# Run linting
lint:
	@echo "Running linters..."
	cd backend && poetry run flake8
	cd frontend && pnpm lint

# Frontend specific commands
.PHONY: frontend-install frontend-dev frontend-build frontend-test
frontend-install:
	cd frontend && pnpm install

frontend-dev:
	cd frontend && pnpm dev

frontend-build:
	cd frontend && pnpm build

frontend-test:
	cd frontend && pnpm test

# Backend specific commands
.PHONY: backend-install backend-dev backend-test
backend-install:
	cd backend && poetry install

backend-dev:
	cd backend && poetry run uvicorn app.main:app --reload

backend-test:
	cd backend && poetry run pytest