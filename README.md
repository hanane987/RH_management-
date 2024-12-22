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

  
### Points d'accès principaux

#### Gestion des Employés
- `POST /api/rh/employees` - Créer un employé
- `GET /api/rh/employees` - Liste des employés
- `PUT /api/rh/employees/:id` - Modifier un employé
- `DELETE /api/rh/employees/:id` - Supprimer un employé

#### Gestion des Candidatures
- `POST /api/rh/applications` - Soumettre une candidature
- `GET /api/rh/applications` - Liste des candidatures
- `PUT /api/rh/applications/:id` - Mettre à jour une candidature

#### OCR
- `POST /api/ocr/analyze` - Analyser un document

## 👥 Rôles et Permissions

### Administrateur
- Accès complet à toutes les fonctionnalités
- Gestion des utilisateurs et des rôles

### RH
- Gestion des employés
- Gestion des offres d'emploi
- Traitement des candidatures
- Accès aux rapports

### Employé
- Consultation de son profil
- Soumission de demandes
- Consultation des offres internes

## 🔄 Workflow

1. **Import des Employés**
   - Upload du fichier CSV
   - Validation des données
   - Création des profils

2. **Gestion des Candidatures**
   - Soumission du CV
   - Analyse OCR
   - Stockage dans MinIO
   - Traitement par RH

3. **Demandes Internes**
   - Soumission de la demande
   - Workflow d'approbation
   - Notification des décisions

## 🛠️ Développement

## 📈 Monitoring et Logs

- Logs centralisés via Winston
- Métriques disponibles via Prometheus
- Dashboard Grafana pour la visualisation

  ****
  ## 📋 Prérequis

- Node.js (v14+)
- Docker et Docker Compose
- MongoDB
- MySQL/PostgreSQL
- MinIO Server
- Keycloak Server

## 🤝 Contributing

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT


