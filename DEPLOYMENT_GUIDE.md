# 🚀 Mols Clothing - Deployment Guide

## Quick Start (Recommended: Railway)

### 1. Prepare Your Repository
```bash
# Make sure your code is committed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `mols-clothing` repository
5. Railway will automatically detect it's a Laravel app

### 3. Add Database
1. In Railway dashboard, click "New" → "Database" → "MySQL"
2. Railway will automatically connect it to your app

### 4. Set Environment Variables
In Railway dashboard, go to your app → Variables tab:

```env
APP_NAME="Mols Clothing"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-app-name.railway.app

DB_CONNECTION=mysql
DB_HOST=your-mysql-host
DB_PORT=3306
DB_DATABASE=railway
DB_USERNAME=root
DB_PASSWORD=your-mysql-password

# Generate a new key after deployment
APP_KEY=base64:your-generated-key
```

### 5. Deploy
Railway will automatically deploy when you push to GitHub!

---

## Alternative: Heroku Deployment

### 1. Install Heroku CLI
```bash
# macOS
brew install heroku/brew/heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

### 2. Create Heroku App
```bash
# Login to Heroku
heroku login

# Create app
heroku create mols-clothing-app

# Add MySQL database
heroku addons:create cleardb:ignite
```

### 3. Set Environment Variables
```bash
# Generate app key
php artisan key:generate --show

# Set variables
heroku config:set APP_KEY=your-generated-key
heroku config:set APP_ENV=production
heroku config:set APP_DEBUG=false
heroku config:set APP_URL=https://mols-clothing-app.herokuapp.com
```

### 4. Deploy
```bash
git push heroku main
```

---

## Environment Variables Reference

### Required Variables
```env
APP_NAME="Mols Clothing"
APP_ENV=production
APP_KEY=base64:your-generated-key
APP_DEBUG=false
APP_URL=https://your-domain.com

DB_CONNECTION=mysql
DB_HOST=your-database-host
DB_PORT=3306
DB_DATABASE=your-database-name
DB_USERNAME=your-database-user
DB_PASSWORD=your-database-password
```

### Optional Variables
```env
# Mail Configuration (if you want contact form to work)
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-email
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="Mols Clothing"
```

---

## Post-Deployment Steps

### 1. Run Migrations
```bash
# On Railway/Heroku, run:
php artisan migrate

# Or if you have database seeding:
php artisan migrate --seed
```

### 2. Generate App Key (if not set)
```bash
php artisan key:generate
```

### 3. Clear Cache
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## Custom Domain Setup

### Railway
1. Go to your app settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Heroku
1. Go to app settings
2. Add custom domain
3. Update DNS records

---

## Troubleshooting

### Common Issues

1. **App Key Error**
   ```bash
   php artisan key:generate
   ```

2. **Database Connection Error**
   - Check your database credentials
   - Ensure database exists
   - Run migrations: `php artisan migrate`

3. **Frontend Not Loading**
   - Ensure Vite build completed: `npm run build`
   - Check if `public/build` directory exists

4. **Images Not Showing**
   - Check image paths in `public/images/`
   - Ensure images are committed to repository

### Debug Mode
If you need to debug, temporarily set:
```env
APP_DEBUG=true
APP_ENV=local
```

---

## Performance Optimization

### 1. Enable Caching
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 2. Optimize Composer
```bash
composer install --optimize-autoloader --no-dev
```

### 3. Frontend Optimization
```bash
npm run build
```

---

## Security Checklist

- [ ] Set `APP_DEBUG=false`
- [ ] Set `APP_ENV=production`
- [ ] Use strong database passwords
- [ ] Enable HTTPS (automatic on Railway/Heroku)
- [ ] Set secure session configuration
- [ ] Use environment variables for sensitive data

---

## Support

If you encounter issues:
1. Check the deployment logs in your hosting platform
2. Verify all environment variables are set correctly
3. Ensure your database is properly configured
4. Check that all dependencies are installed

Happy deploying! 🎉
