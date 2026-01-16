#!/bin/bash
set -e

echo "Application Stop: Stopping containers"
cd /var/www/pharmacy-frontend

# Stop containers gracefully
docker-compose stop || true

echo "Application Stop completed"
