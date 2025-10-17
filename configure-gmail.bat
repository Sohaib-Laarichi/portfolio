@echo off
echo.
echo =================================================
echo   CONFIGURATION GMAIL POUR PORTFOLIO
echo =================================================
echo.
echo 1. Allez sur : https://myaccount.google.com/apppasswords
echo 2. Connectez-vous avec : 9iloxm9lx@gmail.com
echo 3. Cliquez sur "Generer un mot de passe"
echo 4. Choisissez "Autre" et tapez "Portfolio"
echo 5. Copiez le mot de passe de 16 caracteres genere
echo.
echo Une fois que vous avez le mot de passe :
echo.
set /p password="Entrez votre mot de passe Gmail App (16 caracteres) : "
echo.
if "%password%"=="" (
    echo Aucun mot de passe saisi. Configuration annulee.
    pause
    exit /b 1
)

echo EMAIL_PASS=%password% >> .env.local
echo.
echo ✅ Configuration terminee !
echo ✅ Mot de passe ajoute a .env.local
echo.
echo Redemarrez maintenant votre serveur avec : npm run dev
echo.
pause