#!/bin/bash

# Gallery Images Update Script
# This script helps you manage your gallery images

echo "🖼️  Mols Clothing Gallery Images Manager"
echo "========================================"

# Check if images folder exists
if [ ! -d "public/images/gallery" ]; then
    echo "❌ Gallery folder not found. Creating it..."
    mkdir -p public/images/gallery
fi

echo "📁 Current images in gallery folder:"
echo "-----------------------------------"
ls -la public/images/gallery/

echo ""
echo "📋 Expected image filenames:"
echo "----------------------------"
echo "1. african-print-dress-1.jpg"
echo "2. kente-fabric-design.jpg"
echo "3. ankara-style-top.jpg"
echo "4. dashiki-shirt.jpg"
echo "5. african-print-skirt.jpg"
echo "6. kente-fabric-pattern.jpg"
echo "7. ankara-jumpsuit.jpg"
echo "8. traditional-wear.jpg"

echo ""
echo "🔗 Access your gallery at: http://localhost:8000/gallery"
echo ""
echo "💡 To add images:"
echo "   1. Download African fashion images"
echo "   2. Rename them to match the expected filenames above"
echo "   3. Copy them to: public/images/gallery/"
echo "   4. Refresh your browser"
echo ""
echo "✅ Setup complete!"
