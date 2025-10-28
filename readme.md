```
docker run -it --name mongodb  -v ${PWD}:/app -w /app -p 8002:8002 --entrypoint sh node:24-alpine

npm init -y
npm i express mongoose
```

[https://www.mongodb.com/](https://www.mongodb.com/)