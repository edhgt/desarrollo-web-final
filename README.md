# Comandos para proyecto de desarrollo web
## Creación de servidor mongo
```bash
docker run -itd -p 27017:27017 --name mongodb --mount 'type=volume,src=mongodb,dst=/data/db' mongo
```

## Creación de colecciones
```js
use red_social

db.createCollection("usuarios")
db.createCollection("fotos")
db.createCollection("comentarios")
db.createCollection("likes")

exit
```