#!/bin/bash

# Mols Clothing Deployment Script
echo "🚀 Starting deployment process for Mols Clothing..."

# Build frontend assets
echo "📦 Building frontend assets..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Frontend build completed successfully!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

# Commit and push to repository
echo "📤 Committing and pushing to repository..."
git add .
git commit -m "Deploy: Build frontend assets for production"
git push origin main

echo "🎉 Deployment process completed!"
echo ""
echo "Next steps:"
echo "1. Go to your hosting platform (Railway/Heroku)"
echo "2. Ensure your app is connected to this repository"
echo "3. Set your environment variables"
echo "4. Your app should automatically deploy!"
echo ""
echo "For detailed instructions, see DEPLOYMENT_GUIDE.md"
