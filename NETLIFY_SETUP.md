# Netlify Configuration
# Configuration pour le déploiement de sohaib-laarichi.netlify.app

## Réglages SEO pour le Maroc

### URL de production
https://sohaib-laarichi.netlify.app

### Configuration DNS personnalisée (optionnel)
# Pour configurer un domaine personnalisé :
# - Acheter un domaine .ma (exemple: sohaib-laarichi.ma)
# - Configurer les enregistrements DNS :
#   Type: CNAME
#   Name: www
#   Value: sohaib-laarichi.netlify.app
#   
#   Type: A
#   Name: @
#   Value: 75.2.60.5 (IP Netlify)

### Redirections SEO
# Dans _redirects ou netlify.toml :
# /sohaib -> / 301
# /laarichi -> / 301
# /maroc -> / 301
# /morocco -> / 301

### Headers de sécurité et SEO
# X-Robots-Tag: index, follow
# X-Content-Type-Options: nosniff
# X-Frame-Options: DENY
# Content-Security-Policy: default-src 'self'

### Variables d'environnement Netlify
# SITE_URL=https://sohaib-laarichi.netlify.app
# COUNTRY=Morocco
# REGION=Marrakech-Safi
# CITY=Marrakech
# TIMEZONE=Africa/Casablanca

### Analytics et suivi
# Google Analytics: G-XXXXXXXX
# Google Search Console: Vérification du domaine
# Bing Webmaster Tools: Soumission du sitemap

### Performance Netlify
# Build Command: npm run build
# Publish Directory: out/ (ou .next/ selon config)
# Node Version: 18.x
# Edge Functions: Activées pour géolocalisation

### Optimisations automatiques Netlify
# - Compression Brotli/Gzip
# - Optimisation d'images
# - Minification CSS/JS
# - Cache CDN global

### Monitoring
# - Lighthouse CI intégré
# - Core Web Vitals tracking
# - Uptime monitoring
# - Error tracking

## Actions recommandées post-déploiement

1. **Soumettre à Google Search Console**
   - URL: https://sohaib-laarichi.netlify.app/sitemap.xml
   - Cibler le Maroc comme zone géographique

2. **Configurer Google My Business**
   - Créer un profil professionnel
   - Localisation: Marrakech, Maroc
   - Catégorie: Services informatiques

3. **Référencement local Maroc**
   - S'inscrire sur pages-jaunes.ma
   - Créer profil sur marocannuaire.com
   - Rejoindre groupes LinkedIn IT Maroc

4. **Monitoring SEO**
   - Surveiller position pour "Sohaib Laarichi"
   - Tracker "Ingénieur Réseau Maroc"
   - Analyser trafic depuis Morocco

5. **Optimisations techniques**
   - Activer HTTP/2 et HTTP/3
   - Configurer Service Worker
   - Implémenter AMP (optionnel)

## Checklist déploiement Netlify

- [x] Site déployé sur sohaib-laarichi.netlify.app
- [ ] SSL/TLS automatique activé
- [ ] Redirections HTTP -> HTTPS
- [ ] Headers de sécurité configurés
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configuré
- [ ] Google Search Console connecté
- [ ] Analytics configuré
- [ ] Performance optimisée (>90 Lighthouse)
- [ ] Mobile-first indexing validé
- [ ] Données structurées testées
- [ ] Géolocalisation Maroc configurée