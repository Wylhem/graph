# graph Rendu

## Base de données:

La base de données est constituées de 16 tables

### <u>Prototype De la base de données </u>

<img src="./database/School.svg">

### <u>Base de donnée actuelle.</u>

<img src="./database/basededonnéeActuelle.png">

## Projet

Réalisée avec Typescript et express-graphql
Pour Lancer le projet:

```
git clone https://github.com/Wylhem/graph.git
```

creer un .env a la racine du projet
dans le .env créez une variable DATABASE_URL avec vos identifiants :

```
    DATABASE_URL="<provider>://<user>:<password>@<url:port>/<database>?schema=public"
    ex:
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

```

Si votre provider est différent de postgres n'oubliez pas de le changer dans
[prisma/schema.prisma](./prisma/schema.prisma)

## lancer les migration

```
    npx prisma db push
```

## Jeux de données

[vous trouverez des jeux de données ici](./database/script)