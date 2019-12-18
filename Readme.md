# Readme

## 1. Anvendt teknologi

### 1.1 Back-end

#### 1.1.1 Node.js

Appen er en web server, som fungerer via det indbyggede HTTP-modul i Node.js.
Se dette link for yderligere info: https://nodejs.dev/the-nodejs-http-module

#### 1.1.2 Express

Løsningen gør brug af Node.js web application frameworket Express.

Projektet er genereret vha. Express application generator.
Se dette link for yderligere info: https://expressjs.com/en/starter/generator.html

#### 1.1.3 MySQL

Databasen kører på en MySQL-server.

### 1.2 Front-end

#### 1.2.1 HTML, CSS & JavaScript

De forskellige sider er opbygget vha. HTML, CSS og JavaScript. 
Dog er størstedelen af HTML'en oversat til Pug-format (se https://pugjs.org).

## 2. Funktionalitet

### 2.1 RESTful API

Serveren tilbyder en fungerende RESTful API. Dokumentationen hertil findes på startsiden.

### 2.2 Komponent

Serveren giver desuden adgang til et modul, som henter data om offentlige toiletter.
Dataen kan hentes på JSON på følgende path: /moduleJSON
Dataen kan ses i tabelform på følgende path: /moduleTable

## 3. Deployment

Løsningen er hosted på Google Cloud her: