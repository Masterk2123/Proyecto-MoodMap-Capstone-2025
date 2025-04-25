@echo off
echo Iniciando backend...
start cmd /k "cd Backend && node server.js"

echo Iniciando frontend...
start cmd /k "cd Frontend && npx expo start"

echo Todo arrancando!
pause
