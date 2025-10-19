# Mols Clothing

A beautiful, modern fashion website built with Laravel and Vue.js, showcasing African-inspired clothing designs.

## 🌟 Features

- **Multi-page Vue.js application** with smooth page transitions
- **African fashion gallery** with stunning design showcases
- **Responsive design** that works on all devices
- **Contact forms** and customer reviews system
- **Pricing information** and service details
- **Modern UI/UX** with Tailwind CSS styling

## 🚀 Tech Stack

- **Backend**: Laravel 11 (PHP 8.2+)
- **Frontend**: Vue.js 3 with Vue Router
- **Styling**: Tailwind CSS 4.0
- **Build Tool**: Vite
- **Database**: SQLite (development) / MySQL (production)

## 📱 Pages

- **Home** - Hero section with call-to-action
- **About** - Company information and mission
- **Services** - Ready-to-Wear, Custom/Bespoke, Made-to-Order
- **Gallery** - African fashion design showcase
- **Pricing** - Transparent pricing structure
- **Reviews** - Customer testimonials
- **Contact** - Contact information and forms

## 🛠️ Installation

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/JhayMcCarthy/Mols-Clothing.git
   cd Mols-Clothing
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Set up environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Run database migrations**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **Build frontend assets**
   ```bash
   npm run build
   ```

7. **Start development servers**
   ```bash
   # Terminal 1: Laravel server
   php artisan serve
   
   # Terminal 2: Vite dev server
   npm run dev
   ```

8. **Visit the application**
   - Main app: http://localhost:8000
   - Vite dev server: http://localhost:5173

## 🐳 Docker Deployment

### Quick Start
```bash
# Build and run with Docker Compose
docker-compose up --build

# Or use the build script
./build.sh
```

### Available Dockerfiles
- `Dockerfile` - Full Laravel setup with PHP dependencies
- `Dockerfile.standalone` - Optimized standalone build (recommended)
- `Dockerfile.simple` - Simplified version for testing

## 🌐 Deployment

### Recommended Platforms
- **Render** (recommended) - Free tier, Docker support
- **Railway** - Fast deployment, good performance
- **Heroku** - Mature platform (paid)
- **DigitalOcean App Platform** - Production-ready

### Environment Variables
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com
APP_KEY=base64:your-generated-key
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 📁 Project Structure

```
mols-clothing/
├── app/                    # Laravel application logic
├── resources/
│   ├── js/
│   │   ├── components/     # Vue.js components
│   │   │   ├── pages/      # Page components
│   │   │   ├── layout/     # Layout components
│   │   │   └── sections/   # Section components
│   │   ├── router/         # Vue Router configuration
│   │   └── services/       # API services
│   └── css/               # Stylesheets
├── public/                # Public assets
├── database/              # Migrations and seeders
├── routes/                # Laravel routes
└── docker/                # Docker configuration
```

## 🎨 Design Features

- **African-inspired color palette** (amber, orange, gold)
- **Smooth page transitions** and animations
- **Glassmorphism effects** and modern gradients
- **Mobile-first responsive design**
- **Professional typography** and spacing

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run build:static # Build static version
```

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/reviews` - Get customer reviews
- `POST /api/reviews` - Submit new review

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Phone**: 0241 907 180
- **WhatsApp**: 0202563808
- **Email**: info@molsclothing.com
- **Website**: [Mols Clothing](https://molsclothing.com)

---

Built with ❤️ for African fashion excellence.