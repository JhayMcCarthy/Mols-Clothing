#!/bin/bash

echo "🐳 Testing both Dockerfile versions..."

# Test the main Dockerfile first
echo "📦 Testing main Dockerfile..."
docker build -t mols-clothing-main .

if [ $? -eq 0 ]; then
    echo "✅ Main Dockerfile build successful!"
    echo "Using main Dockerfile for deployment."
    exit 0
else
    echo "❌ Main Dockerfile failed, trying simple version..."
    
    # Test the simple Dockerfile
    echo "📦 Testing simple Dockerfile..."
    docker build -f Dockerfile.simple -t mols-clothing-simple .
    
    if [ $? -eq 0 ]; then
        echo "✅ Simple Dockerfile build successful!"
        echo "Consider using Dockerfile.simple for deployment."
        exit 0
    else
        echo "❌ Both Dockerfiles failed!"
        echo "Check the error messages above for details."
        exit 1
    fi
fi
