#!/bin/bash

# Test Docker build locally
echo "🐳 Testing Docker build locally..."

# Build the image
echo "📦 Building Docker image..."
docker build -t mols-clothing-test .

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo ""
    echo "Image built: mols-clothing-test"
    echo ""
    echo "To test the image:"
    echo "  docker run -p 8000:80 mols-clothing-test"
    echo ""
    echo "To clean up:"
    echo "  docker rmi mols-clothing-test"
else
    echo "❌ Docker build failed!"
    echo "Check the error messages above for details."
    exit 1
fi
