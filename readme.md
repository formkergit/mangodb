```
docker network create noteapi-net

docker run -it --name noteapi -v ${PWD}:/app -w /app -p 8002:8002 --network noteapi-net node:alpine /bin/sh

(npm install)
npm init -y
npm i express mongoose

docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db --network noteapi-net mongo:latest

curl -X POST http://localhost:8002/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Ma Premiere Note", "content": "Ce ci est ma premiere note"}'

```

[https://www.mongodb.com/](https://www.mongodb.com/)
