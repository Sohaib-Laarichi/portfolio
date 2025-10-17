#!/bin/bash
# Script pour configurer rapidement le mot de passe Gmail

echo "🔧 Configuration Gmail App Password"
echo "=================================="
echo ""
echo "1. Allez sur: https://myaccount.google.com/apppasswords"
echo "2. Connectez-vous avec: 9iloxm9lx@gmail.com"
echo "3. Créez un nouveau mot de passe pour 'Portfolio'"
echo "4. Copiez le mot de passe de 16 caractères"
echo ""
echo "Puis exécutez cette commande avec votre mot de passe:"
echo ""
echo 'echo "EMAIL_PASS=VOTRE_MOT_DE_PASSE_ICI" >> .env.local'
echo ""
echo "Exemple:"
echo 'echo "EMAIL_PASS=abcdefghijklmnop" >> .env.local'
echo ""
echo "Puis redémarrez le serveur avec: npm run dev"