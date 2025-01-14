# OmniFlow Development Container Documentation

## Frontend Container (Remix Application)

The frontend container serves our Remix application with Vite. This container handles all user interface interactions and client-side processing.

Environment Requirements:
- Node.js 18 or later
- Development port: 5173 (Vite dev server)
- Production port: 3000
- Volume mounting for local development files
- Access to API container
- Environment variables for API endpoints and configuration
- Hot reloading capability for development

Resource Considerations:
[Rest of the content remains the same...]

## Development Environment

### Services
- Frontend (Remix + Vite): 
  - Development: Port 5173
  - Production: Port 3000
- Backend (FastAPI): Port 8000
- MongoDB: Port 27017
- Redis: Port 6379
- MinIO: Ports 9000, 9001
- Nginx: Port 80

### Local Development
To start the frontend in development mode:
```bash
cd frontend
pnpm dev         # Starts on http://localhost:5173
pnpm dev --host  # Exposes to network
```

For production builds:
```bash
pnpm build
pnpm start  # Runs on port 3000
```