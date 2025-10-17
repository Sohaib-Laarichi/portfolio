# 📧 Configuration Gmail SMTP pour le Formulaire de Contact

## ✅ Statut Actuel
- ✅ Configuration SMTP préparée pour: `9iloxm9lx@gmail.com`
- ✅ Code email fonctionnel dans `/api/contact`
- ⚠️ **Mot de passe d'application requis**

## 🔧 Configuration Rapide

### Étape 1 : Génération du mot de passe d'application Gmail

1. **Connectez-vous à Gmail** : `9iloxm9lx@gmail.com`

2. **Activez l'authentification 2FA** (si pas déjà fait) :
   ```
   🔗 https://myaccount.google.com/security
   → "Validation en deux étapes" → Activer
   ```

3. **Générez un mot de passe d'application** :
   ```
   🔗 https://myaccount.google.com/apppasswords
   → Sélectionner "Mail"
   → Appareil: "Portfolio Website"
   → Générer
   ```

4. **Copiez le mot de passe** (16 caractères comme `abcd efgh ijkl mnop`)

### Étape 2 : Configuration automatique

**Option A - Script PowerShell (Recommandé)** :
```powershell
# Exécuter dans le dossier du projet
.\setup-gmail-smtp.ps1
```

**Option B - Configuration manuelle** :
1. Ouvrir `.env.local`
2. Remplacer `YOUR_APP_PASSWORD_HERE` par votre mot de passe d'application
3. Sauvegarder le fichier

### Étape 3 : Test de configuration

```bash
# Tester la configuration email
node test-email-config.js
```

## 📋 Structure du formulaire

Le formulaire envoie automatiquement les emails avec :

### Format HTML élégant :
- **Nom** de l'expéditeur
- **Email** de contact
- **Sujet** du message
- **Message** complet
- **Date/heure** d'envoi

### Informations techniques :
- **SMTP** : Gmail (smtp.gmail.com:587)
- **Sécurité** : TLS/STARTTLS
- **Destination** : `9iloxm9lx@gmail.com`

## 🔒 Sécurité

- ✅ Mot de passe d'application (plus sécurisé que mot de passe Gmail)
- ✅ Variables d'environnement (non versionnées)
- ✅ Validation des emails côté serveur
- ✅ Protection contre le spam

## 🧪 Test de Fonctionnement

Une fois configuré, testez via :

1. **Formulaire de contact** sur le site web
2. **Script de test** : `node test-email-config.js`
3. **Vérification** de réception dans `9iloxm9lx@gmail.com`

## ❗ Dépannage

### Erreur EAUTH :
- Vérifier l'authentification 2FA activée
- Régénérer un nouveau mot de passe d'application
- Vérifier que le mot de passe est correct dans `.env.local`

### Pas de réception d'email :
- Vérifier les spams/courriers indésirables
- Confirmer que le mot de passe d'application est actif
- Tester avec le script `test-email-config.js`

## 🎯 Résultat Final

Une fois configuré, chaque message du formulaire arrivera dans `9iloxm9lx@gmail.com` avec :
- **Notification instantanée** sur mobile/desktop
- **Format professionnel** avec toutes les informations
- **Réponse facile** directement depuis Gmail