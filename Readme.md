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
Der kan f.eks. sendes diverse HTTP requests til API'en gennem Postman. 
POST requests kan sendes via formen på path "/indtastning".

### 2.2 Komponent

Serveren giver desuden adgang til et modul, som henter data om offentlige toiletter.
Dataen kan hentes på JSON på følgende path: /moduleJSON
Dataen kan ses i tabelform på følgende path: /moduleTable

### 2.3 MySQL-datbase

Databasen hedder "mefi". Den indeholder to tabeller, "categories" og "resources".
Hver table har en primary key. Tabellen "categories" har en foreign key kaldet "category_id", som peger på primary key'en i "categories". Dette sikrer, at kategorier-navne ikke gentages. I stedet angives blot et id. Dette gør det desuden nemt at ændre kategori-navne for alle resurser i databasen

## 3. Deployment

### 3.1 Module

Toilet-modulet kan findes på NPMJS her: https://www.npmjs.com/package/moolstoilets

### 3.2 Server

Løsningen er hosted på Google Cloud her: http://35.228.82.10/