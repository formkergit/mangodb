```
docker network create noteapi-net

docker run -it --name noteapi -v ${PWD}:/app -w /app -p 8002:8002 --network noteapi-net node:alpine /bin/sh

(npm install)
npm init -y
npm i express mongoose

docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db --network noteapi-net mongo:latest

curl -X POST http://localhost:8002/api/notes  -H "Content-Type: application/json"  -d '{"titre": "Ma Premiere Note", "contenu": "Ce ci est ma premiere note"}'

curl -X POST http://localhost:8002/api/notes/generer-notes  -H "Content-Type: application/json"  -d '{"nombre": 30}'

```

[https://www.mongodb.com/](https://www.mongodb.com/)

[https://www.hostinger.com/fr/tutoriels/docker-compose-cest-quoi](https://www.hostinger.com/fr/tutoriels/docker-compose-cest-quoi)

[https://openclassrooms.com/fr/courses/8431896-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/8482944-manipulez-docker](https://openclassrooms.com/fr/courses/8431896-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/8482944-manipulez-docker)

[https://v10.fakerjs.dev/guide/](https://v10.fakerjs.dev/guide/)