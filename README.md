<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Système de Gestion RH (Human Resources Management System)

Un système complet de gestion des ressources humaines basé sur une architecture microservices, permettant la gestion des employés, des candidatures, et l'automatisation des processus RH.


## 🎯 Objectifs du Projet

### 1. Gestion centralisée des employés et des candidatures
- Import des profils employés via CSV
- Gestion des demandes internes (congés, augmentations, réclamations)
- Interface RH pour la gestion des offres d'emploi
- Suivi des candidatures

### 2. Détection OCR
- Analyse automatique des CV
- Extraction des informations pertinentes des documents

### 3. Sécurisation et gestion des accès
- Authentification centralisée via Keycloak
- Gestion des rôles (Employé, RH, Administrateur)

### 4. Stockage sécurisé
- Gestion des documents via MinIO
- Stockage sécurisé des CV et pièces justificatives

- ## 🏗️ Architecture Technique

### Backend
- **Framework Principal**: NestJS
- **Authentification**: Keycloak
- **OCR**: Tesseract.js
- **Bases de données**: 
  - MongoDB (candidatures)
  - MySQL/PostgreSQL (données employés)
- **Stockage**: MinIO

### Frontend
- **Framework**: Next.js

### Infrastructure
- **Conteneurisation**: Docker
- **CI/CD**: GitHub Actions
- **API Gateway**: NestJS Gateway
