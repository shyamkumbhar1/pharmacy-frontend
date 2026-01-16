#!/bin/bash
set -e

echo "Before Install: Stopping existing containers"
cd /var/www/pharmacy-frontend

# Stop existing containers
docker-compose down || true

# Backup current deployment
if [ -d "/var/www/pharmacy-frontend-backup" ]; then
    rm -rf /var/www/pharmacy-frontend-backup
fi

if [ -d "/var/www/pharmacy-frontend" ]; then
    cp -r /var/www/pharmacy-frontend /var/www/pharmacy-frontend-backup || true
fi

echo "Before Install completed"
