@echo off
echo Iniciando backend...
cd backend
start cmd /k "mvn spring-boot:run"
cd ..

echo Iniciando frontend...
cd frontend
start cmd /k "npx expo start --web"
cd ..

echo Todo arrancando!
pause
