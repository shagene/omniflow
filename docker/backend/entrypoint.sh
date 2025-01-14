#!/bin/sh

# Wait for dependencies
echo "Waiting for dependencies..."
sleep 5

# Start the application
echo "Starting FastAPI application..."
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload