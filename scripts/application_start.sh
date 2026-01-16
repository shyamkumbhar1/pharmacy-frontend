#!/bin/bash
set -e

echo "Application Start: Starting containers"
cd /var/www/pharmacy-frontend

# Pull latest images
docker-compose pull || true

# Build and start containers
docker-compose up -d --build

# Wait for services to be ready
sleep 10

# Health check
echo "Checking application health..."
for i in {1..30}; do
    if curl -f http://localhost:3001; then
        echo "Application is healthy"
        exit 0
    fi
    echo "Waiting for application to start... ($i/30)"
    sleep 2
done

echo "Application Start completed"
