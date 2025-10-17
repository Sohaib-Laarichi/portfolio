# Script PowerShell pour configurer Gmail
Write-Host "Configuration Gmail App Password" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Allez sur: https://myaccount.google.com/apppasswords" -ForegroundColor Yellow
Write-Host "2. Connectez-vous avec: 9iloxm9lx@gmail.com" -ForegroundColor Yellow  
Write-Host "3. Creez un nouveau mot de passe pour Portfolio" -ForegroundColor Yellow
Write-Host "4. Copiez le mot de passe de 16 caracteres" -ForegroundColor Yellow
Write-Host ""
Write-Host "Puis executez cette commande avec votre mot de passe:" -ForegroundColor Green
Write-Host ""
Write-Host "Add-Content -Path .env.local -Value 'EMAIL_PASS=VOTRE_MOT_DE_PASSE_ICI'" -ForegroundColor White
Write-Host ""
Write-Host "Exemple:" -ForegroundColor Green  
Write-Host "Add-Content -Path .env.local -Value 'EMAIL_PASS=abcdefghijklmnop'" -ForegroundColor White
Write-Host ""
Write-Host "Puis redemarrez le serveur avec: npm run dev" -ForegroundColor Cyan

# Ouvrir automatiquement la page Gmail
Start-Process https://myaccount.google.com/apppasswords