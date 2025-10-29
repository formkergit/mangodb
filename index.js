const express = require('express');
const mongoose = require('mongoose');

const app = express();
const portServer = 8002;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notes')
.then(() => console.log('Connecté à mongodb'))
.catch((err) => console.error('Erreur de connextion à mongodb !', err))

app.listen(portServer, '0.0.0.0' , () => {
    console.log(`Le serveur tourne sur port ${portServer}`);
})