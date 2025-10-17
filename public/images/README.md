# Instructions pour ajouter votre photo

## Étape 1: Préparer votre photo
1. Choisissez une photo professionnelle de vous
2. Redimensionnez-la à 400x400 pixels (carré) pour de meilleurs résultats
3. Formats acceptés: JPG, PNG, WEBP
4. Taille recommandée: moins de 500KB

## Étape 2: Ajouter la photo
1. Renommez votre photo en `profile-photo.jpg`
2. Placez-la dans le dossier `public/images/`
3. Le chemin final devrait être: `public/images/profile-photo.jpg`

## Étape 3: Redémarrer le serveur
Après avoir ajouté la photo, redémarrez le serveur de développement:
```bash
npm run dev
```

Votre photo apparaîtra automatiquement dans la section Hero du portfolio !

## Formats alternatifs
Si vous préférez utiliser un autre nom ou format:
- PNG: changez l'extension dans `src/components/Hero.tsx` ligne 85
- Autre nom: modifiez le chemin `src="/images/votre-nom-photo.jpg"`