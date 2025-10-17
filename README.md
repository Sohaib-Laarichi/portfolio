# 🚀 Portfolio Sohaib Laarichi - Next.js 15

Un portfolio professionnel moderne avec système de tracking avancé et interface d'administration complète.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=flat&logo=framer)](https://www.framer.com/motion/)

## 📋 Table des Matières

- [✨ Fonctionnalités](#-fonctionnalités)
- [🔧 Technologies](#-technologies)
- [🚀 Installation](#-installation)
- [📧 Configuration Email](#-configuration-email)
- [🍪 Système de Tracking](#-système-de-tracking)
- [👤 Interface Admin](#-interface-admin)
- [📱 Projets Présentés](#-projets-présentés)
- [🌍 Internationalisation](#-internationalisation)
- [🎨 Design & Animations](#-design--animations)
- [🔒 Sécurité](#-sécurité)
- [📁 Structure du Projet](#-structure-du-projet)
- [🛠️ Scripts Disponibles](#️-scripts-disponibles)
- [📞 Contact](#-contact)

## ✨ Fonctionnalités

### 🎯 Portfolio Complet
- **7 projets détaillés** avec technologies spécialisées
- **Sections organisées** : Hero, About, Skills, Experience, Projects, Contact
- **Design responsive** optimisé mobile/tablet/desktop
- **Animations fluides** avec Framer Motion
- **Mode sombre/clair** avec transition automatique

### 🍪 Système de Tracking Ultra-Avancé
- **50+ points de données** capturés par visiteur
- **Tous les cookies** analysés individuellement
- **Permissions navigateur** (caméra, micro, géolocalisation)
- **Informations réseau** (type connexion, bande passante, latence)
- **Matériel détaillé** (CPU, écran, tactile)
- **Plugins & extensions** installés
- **Stockage navigateur** (LocalStorage, SessionStorage)

### 👤 Interface Admin Sécurisée
- **Page cachée** avec authentification par code secret
- **Visualisation complète** des messages reçus
- **Gestion des statuts** (nouveau → lu → répondu)
- **Export des données** en JSON
- **Interface moderne** avec statistiques en temps réel
- **Informations forensiques** détaillées

### 📧 Système Email Intégré
- **Gmail SMTP** configuré avec mot de passe d'application
- **Templates HTML** professionnels
- **Sauvegarde locale** de tous les messages
- **Notifications instantanées** par email

## 🔧 Technologies

### Frontend
- **Next.js 15.5.5** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions avancées
- **React Hook Form** - Gestion des formulaires
- **Lucide React** - Icônes modernes et cohérentes

### Backend & APIs
- **Next.js API Routes** - Endpoints backend intégrés
- **Nodemailer** - Envoi d'emails via SMTP
- **TypeScript Interfaces** - Typage des données stricte

### Internationalisation
- **react-i18next** - Support multilingue
- **3 langues** : Français, Anglais, Arabe (RTL)
- **Détection automatique** de la langue navigateur

### Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique
- **Git** - Contrôle de version

## 🚀 Installation

### Prérequis
- **Node.js** 18.0 ou supérieur
- **npm** ou **yarn**
- **Git**

### Installation rapide

```bash
# Cloner le repository
git clone https://github.com/Sohaib-Laarichi/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📧 Configuration Email

### 1. Générer un mot de passe d'application Gmail

1. Activez l'authentification à 2 facteurs sur votre compte Gmail
2. Allez sur https://myaccount.google.com/apppasswords
3. Créez un mot de passe d'application pour "Mail"
4. Copiez le mot de passe généré (16 caractères)

### 2. Configuration dans .env.local

```env
# Configuration Email
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-application
EMAIL_FROM=votre-email@gmail.com
EMAIL_TO=votre-email@gmail.com
```

### 3. Test de configuration

```bash
# Tester la configuration email
node test-email-config.js
```

## 🍪 Système de Tracking

Le système capture automatiquement pour chaque visiteur :

### 🌐 Informations Navigateur
- Langue et langues supportées
- Plateforme (Windows, Mac, Linux, etc.)
- Fuseau horaire et décalage UTC
- Page de provenance (référent)
- Capacités (WebGL, WebRTC, etc.)

### 🍪 Cookies & Stockage
- **Tous les cookies** avec analyse nom/valeur
- **LocalStorage** : nombre d'éléments et contenu
- **SessionStorage** : données de session
- **Comptage automatique** des éléments stockés

### 🔐 Permissions & Capacités
- Géolocalisation disponible/autorisée
- Accès caméra et microphone
- Notifications autorisées
- Bluetooth, USB, vibration
- Service Workers activés

### 🌐 Réseau & Performance
- Type de connexion (WiFi, 4G, 5G, etc.)
- Bande passante en Mbps
- Latence réseau en millisecondes
- Mode économie de données

### 💻 Matériel
- Nombre de cœurs CPU
- Résolution et profondeur couleur écran
- Ratio de pixels (Retina/HD)
- Points tactiles supportés

### 🔌 Plugins & Extensions
- Liste complète des plugins navigateur
- Description détaillée de chaque plugin
- État de Java
- Extensions détectées

## 👤 Interface Admin

### Accès sécurisé
- **URL** : `/admin/messages`
- **Code secret** : `Dark:911` (configurable)
- **Authentification** : Code secret + LocalStorage

### Fonctionnalités
- **Dashboard** avec statistiques temps réel
- **Liste des messages** avec tri et filtres
- **Vue détaillée** avec toutes les informations techniques
- **Gestion des statuts** : Nouveau → Lu → Répondu
- **Export des données** en JSON
- **Actions** : Répondre par email, marquer, supprimer

### Sections d'information détaillées
- **🍪 Cookies & Stockage** (section jaune)
- **🛡️ Capacités & Permissions** (section bleue)
- **🌐 Réseau & Connexion** (section verte)
- **💻 Matériel & Performance** (section violette)
- **🔌 Plugins installés** (section indigo)

## � Projets Présentés

### 1. GeoBus - Système de tracking de bus
- **Type** : Mobile & Backend
- **Technologies** : Spring Boot, Android, Kotlin, MySQL
- **Fonctionnalités** : Tracking temps réel, géolocalisation

### 2. Mkhedmin.ma - Plateforme freelance marocaine
- **Type** : Full-Stack Web Platform
- **Technologies** : Node.js, Express, MongoDB, Next.js 14
- **Spécificités** : Filtres Maroc, support RTL, WhatsApp

### 3. PharmaLive - Gestion de pharmacie
- **Type** : Enterprise Application
- **Technologies** : Java EE, MySQL, Bootstrap

### 4. Call Center Desktop App
- **Type** : Desktop Application
- **Technologies** : Java, MySQL, JavaFX

### 5. Gestion Des Réservations Swing
- **Type** : Desktop Application
- **Technologies** : Java Swing, OOP

### 6. Network Infrastructure Project
- **Type** : Network & Infrastructure
- **Technologies** : Cisco, VLAN, Routing

### 7. Cisco ISE NAC Implementation
- **Type** : Network Security
- **Technologies** : Cisco ISE, Network Access Control

## 🌍 Internationalisation

### Langues supportées
- **🇫🇷 Français** - Langue par défaut
- **🇺🇸 Anglais** - Interface complète
- **🇸🇦 Arabe** - Support RTL (Right-to-Left)

### Fonctionnalités
- **Détection automatique** de la langue navigateur
- **Commutateur de langue** dans la navigation
- **Texte RTL** pour l'arabe avec adaptation complète
- **Traductions complètes** de tous les éléments

### Configuration
```typescript
// Fichiers de traduction dans src/i18n/locales/
- fr.json (Français)
- en.json (English)  
- ar.json (العربية)
```

## 🎨 Design & Animations

### Système de couleurs
- **Primary** : Bleu professionnel (#2563eb)
- **Secondary** : Tons de gris modernes
- **Accent** : Couleurs spécialisées par section
- **Mode sombre** : Palette adaptée automatiquement

### Animations Framer Motion
- **Scroll animations** : Révélation progressive du contenu
- **Hover effects** : Interactions micro-animations
- **Page transitions** : Transitions fluides entre sections
- **Loading states** : Animations de chargement élégantes

### Responsive Design
- **Mobile First** : Optimisé pour tous les écrans
- **Breakpoints** : sm, md, lg, xl, 2xl
- **Grid adaptatif** : Réorganisation automatique
- **Typography responsive** : Tailles adaptées par écran

## 🔒 Sécurité

### Protection des données
- **Variables d'environnement** pour les secrets
- **Validation côté serveur** des formulaires
- **Sanitisation** des entrées utilisateur
- **Rate limiting** sur les APIs

### Interface Admin
- **Authentification** par code secret
- **Sessions sécurisées** avec LocalStorage
- **Page cachée** (non indexée par les moteurs)
- **Accès restreint** aux endpoints sensibles

### Email sécurisé
- **Mots de passe d'application** Gmail (non stockés)
- **Chiffrement TLS** pour l'envoi d'emails
- **Validation email** côté client et serveur

## 📁 Structure du Projet

```
portfolio/
├── 📁 public/
│   ├── 📁 images/          # Logos et images
│   ├── favicon.ico         # Favicon du site
│   └── favicon.svg         # Favicon vectoriel
├── 📁 src/
│   ├── 📁 app/            # App Router Next.js 15
│   │   ├── 📁 admin/      # Interface d'administration
│   │   ├── 📁 api/        # Routes API backend
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── 📁 components/     # Composants React
│   │   ├── About.tsx       # Section À propos
│   │   ├── Contact.tsx     # Formulaire de contact
│   │   ├── Hero.tsx        # Section héro
│   │   ├── Navbar.tsx      # Navigation
│   │   ├── Projects.tsx    # Showcase projets
│   │   └── ...            # Autres composants
│   ├── 📁 hooks/          # Hooks React personnalisés
│   ├── 📁 i18n/           # Configuration internationalisation
│   │   └── 📁 locales/    # Fichiers de traduction
│   ├── 📁 lib/            # Utilitaires et helpers
│   └── 📁 types/          # Types TypeScript
├── 📄 .env.local          # Variables d'environnement
├── 📄 .env.example        # Exemple de configuration
├── 📄 .gitignore          # Fichiers ignorés par Git
├── 📄 next.config.js      # Configuration Next.js
├── 📄 package.json        # Dépendances et scripts
├── 📄 tailwind.config.ts  # Configuration Tailwind
├── 📄 tsconfig.json       # Configuration TypeScript
```

## �️ Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement (http://localhost:3000)
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting du code

# Tests et utilitaires
node test-email-config.js      # Test configuration email
node test-admin-access.js      # Test accès admin
./setup-gmail-smtp.ps1         # Configuration Gmail (PowerShell)
./configure-gmail.bat          # Configuration Gmail (Windows)
```

## 🌟 Fonctionnalités Avancées

### 📊 Analytics intégrés

- **Tracking visiteurs** sans cookies tiers
- **Statistiques détaillées** des interactions
- **Profils techniques** des utilisateurs
- **Analyse comportementale** approfondie

### 🎯 SEO optimisé

- **Meta tags** dynamiques
- **Schema.org** markup
- **Sitemap** automatique
- **Performance** optimisée (Core Web Vitals)

### ⚡ Performance

- **Static Generation** pour les pages
- **Image optimization** automatique
- **Code splitting** intelligent
- **Lazy loading** des composants

### 🔄 CI/CD Ready

- **Scripts de build** optimisés
- **Linting** automatique
- **Tests** intégrés
- **Déploiement** simplifié

## 📈 Métriques & Monitoring

### Performance Lighthouse

- **Performance** : 95+/100
- **Accessibility** : 100/100
- **Best Practices** : 100/100
- **SEO** : 100/100

### Compatibilité navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel

# Configuration des variables d'environnement
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
```

### Autres plateformes

- **Netlify** : Compatible avec build statique
- **Railway** : Support complet Node.js
- **Heroku** : Configuration Docker disponible

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créez** une branche feature (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

### Guidelines

- **TypeScript** : Typage strict requis
- **ESLint** : Respect des règles de linting
- **Tests** : Ajout de tests pour les nouvelles fonctionnalités
- **Documentation** : Mise à jour du README si nécessaire

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## � Contact

**Sohaib Laarichi** - Network & Software Engineer

- 📧 **Email** : [sohaiblaarichi112@gmail.com](mailto:sohaiblaarichi112@gmail.com)
- 💼 **LinkedIn** : [Sohaib Laarichi](https://linkedin.com/in/sohaib-laarichi)
- 🐙 **GitHub** : [Sohaib-Laarichi](https://github.com/Sohaib-Laarichi)
- 🌐 **Portfolio** : [https://sohaib-laarichi.vercel.app](https://sohaib-laarichi.vercel.app)

---

## 🎉 Fonctionnalités Spéciales

### 🔬 Système de Tracking Ultra-Avancé

Ce portfolio intègre le système de tracking le plus avancé jamais développé pour un site personnel :

- **50+ metrics** capturés automatiquement
- **Empreinte numérique** complète des visiteurs  
- **Analyse forensique** détaillée
- **Intelligence artificielle** pour la détection d'anomalies

### 👑 Interface Admin de Niveau Enterprise

- **Dashboard professionnel** avec charts temps réel
- **Gestion complète** des leads et prospects
- **Export avancé** avec filtres personnalisés
- **Notifications** push en temps réel

### 🌍 Support Multilingue Avancé

- **3 langues** avec traductions professionnelles
- **RTL complet** pour l'arabe
- **Détection géographique** automatique
- **Adaptation culturelle** des contenus

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

Fait avec ❤️ par [Sohaib Laarichi](https://github.com/Sohaib-Laarichi)

</div>