#!/bin/bash

# Navigate to the app directory
cd /home/ubuntu/shopify-app-metaobjects

# Stop and remove existing containers
sudo docker-compose -f docker-compose.yml down

# Remove old images (optional: if you're using unique tags, you might want to clean up old images)
sudo docker rmi $(docker images -q)

# Prune unused volumes
sudo docker volume prune -f

# Increase Docker timeouts
export DOCKER_CLIENT_TIMEOUT=300
export COMPOSE_HTTP_TIMEOUT=300

# Start the new containers
sudo docker-compose -f docker-compose.yml up -d --build
