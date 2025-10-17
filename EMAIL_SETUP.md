# Configuration de l'Email pour le Portfolio

## Étapes pour configurer l'envoi d'emails avec Gmail

### 1. Activer l'authentification à deux facteurs sur Gmail
1. Allez dans votre compte Google
2. Sécurité > Authentification à 2 facteurs
3. Activez l'A2F si ce n'est pas déjà fait

### 2. Créer un mot de passe d'application
1. Allez dans votre compte Google
2. Sécurité > Authentification à 2 facteurs > Mots de passe des applications
3. Sélectionnez "Autre (nom personnalisé)"
4. Tapez "Portfolio Website"
5. Copiez le mot de passe généré (16 caractères)

### 3. Configurer les variables d'environnement
Modifiez le fichier `.env.local` avec vos informations :

```env
# Configuration Email
EMAIL_USER=9iloxm9lx@gmail.com
EMAIL_PASS=votre_mot_de_passe_application_ici
EMAIL_FROM=9iloxm9lx@gmail.com
EMAIL_TO=9iloxm9lx@gmail.com
```

### 4. Redémarrer le serveur de développement
```bash
npm run dev
```

## Test de la fonctionnalité
1. Accédez au formulaire de contact sur votre portfolio
2. Remplissez et envoyez un message test
3. Vérifiez votre boîte mail 9iloxm9lx@gmail.com

## Dépannage

### Erreur "Invalid credentials"
- Vérifiez que l'authentification à 2 facteurs est activée
- Assurez-vous d'utiliser un mot de passe d'application, pas votre mot de passe Gmail principal
- Vérifiez que l'adresse email est correcte

### Erreur "Less secure app access"
- Gmail a désactivé cette option - utilisez obligatoirement un mot de passe d'application

### Emails non reçus
- Vérifiez le dossier spam/courrier indésirable
- Attendez quelques minutes (délai de livraison possible)
- Vérifiez les logs du serveur pour les erreurs

## Sécurité
- Ne partagez jamais votre mot de passe d'application
- Le fichier `.env.local` est dans `.gitignore` - ne le commitez pas
- Pour la production, utilisez les variables d'environnement de votre hébergeur