# Comandos para proyecto de desarrollo web
## Creación de servidor mongo
```bash
docker run -itd -p 27017:27017 --name mongodb --mount 'type=volume,src=mongodb,dst=/data/db' mongo
```

## Creación de colecciones
```bash
docker exec mongodb mongosh
```
```js
use red_social

db.createCollection("usuarios")
db.createCollection("fotos")
db.createCollection("comentarios")
db.createCollection("likes")

exit
```

### Desplegar entornos de desarrollo
```bash
cp backend/.env.example backend/.env
cd backend
npm install
npm run dev

cp frontend/.env.example frontend/.env
cd frontend
npm install
npm run dev
```