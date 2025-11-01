# Qu'est-ce qu'une API REST ?

- Une **API REST** (**Application Programming Interfaces** **Representational State Transfer**) est une interface permettant à des applications d'échanger des données via internet
- Elle repose sur le protocole **HTTP** et permet de communiquer entre des applications différents, souvent pour construire des **services web** ou des architectures **client-serveur**
- Une **API** est comme un contrat : elle fixe comment une application peut demander et recevoir des informations d'un serveur


***

# Fonctionnement d'une API REST

- Elle utilise des méthodes **HTTP** standard : **GET** (lecture), **POST** (création), **PUT** (modification), **DELETE** (suppression)
- À chaque requête, le **client** envoie une **demande** sur une **ressource** identifiée (exemple : /utilisateurs/123)
- Le serveur **répond** en renvoyant une **représentation** de la ressource (en général en format **JSON**)

***

## Endpoints API

- **Points** de **Communication** entre **Client et Serveur
**- **Interface de communication** dans une API
- **Point de contact unique** pour une action spécifique
- **URL** permettant d'interagir avec une ressource

***

## Bases de Données Relationnelles (SQL)

- **Structure rigide** avec schéma prédéfini
- Organisation en **tables** avec **relations**
- Utilisation du langage **SQL**
- Exemples : **SQlite, MySQL(MariaDB), PostgreSQL, Oracle**

***

## Bases de Données NoSQL

- **Non relationnelle** : Ne fonctionne pas avec des tables, lignes ou colonnes traditionnelles
- **Flexible et évolutive** : Gère facilement les données structurées, semi-structurées et non structurées sans schéma fixe
- **Scalabilité** : Conçue pour le Big Data et les applications distribuées, permettant l’ajout de capacité facilement
- **Performance** : Optimisée pour la rapidité d’accès, la gestion de volumes massifs et la disponibilité
- **Types variés** : Inclut des bases orientées documents, clé-valeur, colonne ou graphe

***

# MongoDB

- **Modèle document** : Stockage sous forme de documents **JSON** dans des **collections**
- **Évolutivité** : Schéma flexible, chaque document peut posséder des champs différents
- Base de données → Collections → Documents
- Chaque document est identifié par un champ **_id** unique
- Système de recherche optimisé, manipulation de données géographiques
- **Stockage** de données massives pour des applications web, mobile, IoT, etc..

***

## Object Data Modeling (ODM)

- **Traducteur** entre le code **objet** et la **base de données documentaire
**- **Transforme** les objets du langage de programmation en documents MongoDB
- Agit comme une **surcouche** d'**abstraction** et de **validation**

***

## L'ODM Mongoose

- **Modélisation des données**
- Définition de **schémas** 
- **Validation** des données
- Interception des événements (**save, validate, remove**)

***

## Mini-projet API de notes avec Docker et MongoDB

***

## Objectif 

- Construire une API de **notes** fonctionnant avec **Node.js** et **Express**
- Utilisation de **MongoDB** comme base de données
- Conteneurisation complète grâce à **Docker** et **Docker compose**
- Génération automatisée de données de test avec **faker-js**

***

## Prérequis et Technologies

- **Node.js** : **Serveur JavaScript**
- **Express** : Framework **Node.js** pour **API REST**
- **MongoDB** : Base de données **NoSQL**
- **Mongoose** : **ODM** pour **MongoDB**
- **Docker** : Conteneurisation de l’**API** et de **MongoDB**
- **faker-js** : **Génération** de fausses données
- **Curl** : **Test** de l’**API** en ligne de commande
- **Bruno** : **VSCode** extension pour **tester** l'**API**

***

## Mise en Place (Docker)

Création d’un réseau privé Docker pour la communication des conteneurs.

Lancement de l’API et de MongoDB dans deux conteneurs séparés.


***

Création du reseau internet aux services :

`docker network create noteapi-net`

Lancement du conteneur de la base de donnée **MongoDB** :

`docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db --network noteapi-net mongo:latest`

***

Lancement du conteneur du serveur **NodeJS** et execution de commande dans le conteneur :

`docker run -it --name noteapi -v ${PWD}:/app -w /app -p 8002:8002 --network noteapi-net node:alpine /bin/sh`

Initilisation du projet :

`npm init -y`

Installation des logiciels nécéssaires :

`npm install express mongoose @faker-js/faker`

***

## Endpoints de l’API

- **POST /api/notes**
  - Ajout d’une **note** avec **titre** et **contenu**
- **POST /api/notes/generer-notes**
  - **Génère** **automatiquement** plusieurs notes de test (ex : 30)

***

## Requêtes avec curl

Insertion d'une **note** via **Curl** :

`curl -X POST http://localhost:8002/api/notes -H "Content-Type: application/json" -d '{"titre": "Ma Premiere Note", "contenu": "Ce ci est ma premiere note"}'`

**Génération** de 30 **notes** :

`curl -X POST http://localhost:8002/api/notes/generer-notes -H "Content-Type: application/json" -d '{"nombre": 30}'`

***

## Docker Compose

Mise en place d'une **orchestration** **multi-conteneurs** avec **Docker Compose**.

***

## Liens Ressources :

- [Site officiel NodeJS](https://nodejs.org/fr)
- [Site officiel MongoDB](https://www.mongodb.com/)
- [Introduction aux API web](https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
- [Site officel Docker](https://www.docker.com/)
- [NodeJS image docker](https://hub.docker.com/_/node/)
- [Docker compose](https://docs.docker.com/reference/compose-file/services/)
- [Docker Compose : explications et tutoriels](https://www.hostinger.com/fr/tutoriels/docker-compose-cest-quoi)
- [Optimiser son déploiement avec Docker (OpenClassrooms)](https://openclassrooms.com/fr/courses/8431896-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/8482944-manipulez-docker)
- [faker.js pour générer les fausses données](https://v10.fakerjs.dev/guide/)

***

## Concepts abordés

- **Isolation** et **communication** inter-conteneurs **Docker**
- Initialisation rapide d’un serveur **NodeJS** avec le **framework** **Express** 
- **Intégration** de **Mongoose** avec **MongoDB**
- **Génération** de fausses données pour tests l'**API** avec **faker-js**
- **Tests** de l'**API** avec **curl**

***

## Pour aller plus loin

- Ajouter des **routes** **PUT** et **DELETE** pour une **API** complète
- **Sécurité** (**authentification**, **validation** de données)
