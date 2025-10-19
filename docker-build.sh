#!/bin/bash

# Mols Clothing Docker Build Script

echo "🐳 Building Mols Clothing Docker Images..."

# Build production image
echo "📦 Building production image..."
docker build -t mols-clothing:latest .

if [ $? -eq 0 ]; then
    echo "✅ Production image built successfully!"
else
    echo "❌ Production image build failed!"
    exit 1
fi

# Build development image
echo "🔧 Building development image..."
docker build -f Dockerfile.dev -t mols-clothing:dev .

if [ $? -eq 0 ]; then
    echo "✅ Development image built successfully!"
else
    echo "❌ Development image build failed!"
    exit 1
fi

echo ""
echo "🎉 All Docker images built successfully!"
echo ""
echo "Available images:"
echo "  - mols-clothing:latest (production)"
echo "  - mols-clothing:dev (development)"
echo ""
echo "To run the application:"
echo "  Production: docker-compose up -d"
echo "  Development: docker-compose -f docker-compose.dev.yml up -d"
echo ""
echo "For more information, see DOCKER_README.md"
