# 🐳 Docker Setup for Mols Clothing

This project includes comprehensive Docker configuration for both development and production environments.

## 📁 Docker Files Structure

```
├── Dockerfile              # Production Docker image
├── Dockerfile.dev          # Development Docker image
├── docker-compose.yml      # Production environment
├── docker-compose.dev.yml  # Development environment
└── docker/
    ├── nginx.conf          # Nginx configuration
    ├── supervisord.conf    # Production supervisor config
    ├── supervisord.dev.conf # Development supervisor config
    ├── php.ini             # Production PHP configuration
    └── php.dev.ini         # Development PHP configuration
```

## 🚀 Quick Start

### Production Environment

1. **Build and run the production environment:**
```bash
docker-compose up -d
```

2. **Access your application:**
- Application: http://localhost:8000
- MySQL: localhost:3306

### Development Environment

1. **Build and run the development environment:**
```bash
docker-compose -f docker-compose.dev.yml up -d
```

2. **Access your application:**
- Application: http://localhost:8000
- Vite Dev Server: http://localhost:5173
- MySQL: localhost:3307

## 🔧 Development Commands

### Initial Setup
```bash
# Copy environment file
cp .env.example .env

# Generate application key
docker-compose exec app php artisan key:generate

# Run migrations
docker-compose exec app php artisan migrate

# Install frontend dependencies (if needed)
docker-compose exec app npm install

# Build frontend assets
docker-compose exec app npm run build
```

### Common Commands
```bash
# Access the application container
docker-compose exec app bash

# Run Laravel commands
docker-compose exec app php artisan migrate
docker-compose exec app php artisan tinker
docker-compose exec app php artisan queue:work

# Run frontend commands
docker-compose exec app npm run dev
docker-compose exec app npm run build

# View logs
docker-compose logs -f app
docker-compose logs -f mysql
```

## 🏗️ Production Deployment

### Using Docker Compose

1. **Set environment variables:**
```bash
# Copy and edit production environment
cp .env.example .env.production

# Set production values
APP_ENV=production
APP_DEBUG=false
DB_HOST=mysql
DB_DATABASE=mols_clothing
DB_USERNAME=mols_user
DB_PASSWORD=your_secure_password
```

2. **Deploy:**
```bash
docker-compose up -d
```

### Using Docker Image Only

1. **Build the image:**
```bash
docker build -t mols-clothing .
```

2. **Run with external database:**
```bash
docker run -d \
  --name mols-clothing-app \
  -p 8000:80 \
  -e DB_HOST=your-db-host \
  -e DB_DATABASE=mols_clothing \
  -e DB_USERNAME=mols_user \
  -e DB_PASSWORD=your_password \
  mols-clothing
```

## 🔒 Security Features

### Production Security
- ✅ **Non-root user** (www-data)
- ✅ **Security headers** in Nginx
- ✅ **Hidden PHP version**
- ✅ **Denied access** to sensitive files
- ✅ **Optimized PHP settings**
- ✅ **OPcache enabled**

### File Permissions
- ✅ **Proper ownership** (www-data:www-data)
- ✅ **Secure directory permissions** (755)
- ✅ **Protected storage** and cache directories

## 📊 Performance Optimizations

### PHP Optimizations
- **OPcache enabled** for faster PHP execution
- **Memory limit** set to 256M
- **Optimized autoloader** with Composer
- **Compressed assets** with Gzip

### Nginx Optimizations
- **Gzip compression** for text files
- **Static file caching** (1 year)
- **Keep-alive connections**
- **Worker process optimization**

## 🗄️ Database Configuration

### MySQL Setup
- **Version**: MySQL 8.0
- **Default Database**: mols_clothing
- **Default User**: mols_user
- **Persistent Storage**: Docker volumes

### Environment Variables
```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=mols_clothing
DB_USERNAME=mols_user
DB_PASSWORD=mols_password
```

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Build Docker image
        run: docker build -t mols-clothing .
      
      - name: Deploy to server
        run: |
          docker-compose down
          docker-compose up -d
```

## 🐛 Troubleshooting

### Common Issues

1. **Permission Errors:**
```bash
# Fix file permissions
docker-compose exec app chown -R www-data:www-data /var/www/html
docker-compose exec app chmod -R 755 /var/www/html/storage
```

2. **Database Connection Issues:**
```bash
# Check database status
docker-compose exec mysql mysql -u root -p -e "SHOW DATABASES;"

# Reset database
docker-compose down -v
docker-compose up -d
```

3. **Frontend Build Issues:**
```bash
# Rebuild frontend assets
docker-compose exec app npm run build

# Clear cache
docker-compose exec app php artisan cache:clear
```

4. **Tailwind CSS v4 Build Issues:**
```bash
# If you get "tailwind.config.js not found" errors:
# This is normal - Tailwind CSS v4 doesn't use a config file
# The build should work without it
```

5. **PHP Extension Installation Conflicts:**
```bash
# If you get "ctype is already loaded" or similar errors:
# Try using Dockerfile.simple or Dockerfile.minimal instead
# These have fewer extensions and are more reliable

# Test different versions:
./docker-test-both.sh
```

### Logs and Debugging
```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs app
docker-compose logs mysql
docker-compose logs nginx

# Access container shell
docker-compose exec app bash
```

## 📈 Monitoring

### Health Checks
- **Application health check** on port 80
- **Database connectivity** check
- **Nginx status** monitoring

### Log Files
- **Application logs**: `/var/log/supervisor/`
- **Nginx logs**: `/var/log/nginx/`
- **PHP logs**: `/var/log/php_errors.log`

## 🔧 Customization

### Adding Services
To add new services (Redis, Elasticsearch, etc.), edit `docker-compose.yml`:

```yaml
services:
  redis:
    image: redis:7-alpine
    container_name: mols-clothing-redis
    ports:
      - "6379:6379"
    networks:
      - mols-network
```

### Environment Variables
Add custom environment variables in your `.env` file or `docker-compose.yml`:

```yaml
environment:
  - CUSTOM_VAR=value
  - ANOTHER_VAR=another_value
```

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Laravel Docker Guide](https://laravel.com/docs/containerization)
- [Nginx Configuration](https://nginx.org/en/docs/)
- [PHP-FPM Configuration](https://www.php.net/manual/en/install.fpm.php)

---

## 📁 Dockerfile Options

### Dockerfile (Main)
*   **Purpose**: Production-optimized multi-stage Dockerfile for the Laravel + React application.
*   **Features**: Full PHP extension set, optimized for production.
*   **Use when**: You need all PHP extensions and features.

### Dockerfile.simple
*   **Purpose**: Simplified version with fewer PHP extensions to avoid conflicts.
*   **Features**: Essential extensions only (pdo_mysql, mbstring, bcmath, intl, gd).
*   **Use when**: Main Dockerfile fails due to extension conflicts.

### Dockerfile.minimal
*   **Purpose**: Minimal version with only essential components.
*   **Features**: Only pdo_mysql and mbstring extensions.
*   **Use when**: You need the most reliable build with minimal dependencies.

### Testing Different Versions
```bash
# Test all versions
./docker-test-both.sh

# Test specific version
docker build -f Dockerfile.simple -t mols-clothing-simple .
docker build -f Dockerfile.minimal -t mols-clothing-minimal .
```

---

**Happy Dockerizing! 🐳✨**
