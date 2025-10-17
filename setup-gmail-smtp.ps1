# Configuration automatique de Gmail SMTP pour le portfolio
# Script PowerShell pour Windows

Write-Host "🔧 Configuration Gmail SMTP pour Portfolio" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Vérifier si .env.local existe
if (-Not (Test-Path ".env.local")) {
    Write-Host "❌ Fichier .env.local non trouvé!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📋 ÉTAPES À SUIVRE:" -ForegroundColor Yellow
Write-Host "1. Connectez-vous à votre Gmail: 9iloxm9lx@gmail.com"
Write-Host "2. Allez sur: https://myaccount.google.com/security"
Write-Host "3. Activez 'Validation en deux étapes' (si pas déjà fait)"
Write-Host "4. Allez sur: https://myaccount.google.com/apppasswords"
Write-Host "5. Créez un mot de passe d'application pour 'Mail'"
Write-Host ""

# Demander le mot de passe d'application
$appPassword = Read-Host -Prompt "🔑 Entrez votre mot de passe d'application Gmail (16 caractères)"

if ($appPassword.Length -eq 0) {
    Write-Host "❌ Mot de passe requis!" -ForegroundColor Red
    exit 1
}

# Lire le contenu actuel de .env.local
$content = Get-Content ".env.local" -Raw

# Remplacer YOUR_APP_PASSWORD_HERE par le mot de passe fourni
$newContent = $content -replace "EMAIL_PASS=YOUR_APP_PASSWORD_HERE", "EMAIL_PASS=$appPassword"

# Sauvegarder le fichier
Set-Content ".env.local" $newContent

Write-Host ""
Write-Host "✅ Configuration sauvegardée dans .env.local" -ForegroundColor Green

# Tester la configuration
Write-Host ""
Write-Host "🧪 Test de la configuration..." -ForegroundColor Cyan

try {
    & node test-email-config.js
} catch {
    Write-Host "❌ Erreur lors du test. Vérifiez votre configuration." -ForegroundColor Red
}

Write-Host ""
Write-Host "📚 INFORMATIONS IMPORTANTES:" -ForegroundColor Yellow
Write-Host "• Le mot de passe d'application est différent de votre mot de passe Gmail"
Write-Host "• Gardez ce mot de passe sécurisé (il donne accès à votre email)"
Write-Host "• Vous pouvez révoquer ce mot de passe à tout moment depuis Google"
Write-Host ""
Write-Host "🎉 Configuration terminée! Votre formulaire de contact fonctionne maintenant." -ForegroundColor Green