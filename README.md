# CARMA Assessment - API server

The application uses NodeJs 12+ with Express for the web application framework and [Sequelize](https://sequelize.org/) as ORM.

## Getting started

 1. Run `npm install`
 2. Copy `.env.example` to a new file named `.env`
 3. Make necessary changes to the `.env` to ensure authentication to your postgres database
 4. Run `npx sequelize-cli db:migrate` to run migrations on the database. This will create the `Cards` table.
 5. Running `npm start` will start the API server

## Creating new models

The `Cards` model was created using `sequelize-cli` by the following command :
	
	npx sequelize-cli model:generate --name Card --attributes name:string,number:string,cvv:string,expiry:string

This will create a model file in `app/db/models` folder and the migration script for it in `app/db/migrations` folder. This configuration for database configuration, models, migrations and seeders is stored in `.sequelizerc` file at the root of the project

More models can be created using the same approach

## Encryption

### Card number
Card number is encrypted with `aes-256-cbc` algorithm. We will need to retrieve card number later inorder to process transactions, so card number needs to be saved with a secure encryption algorithm

### CVV
CVV is stored as a bcrypt hash. The user will be required to enter the cvv with each transaction to authenticate it. The entered cvv can be compared with the stored bcrypt hash to validate it. Hence, we do not require the cvv to be decryptable.

## Validating card number
The [node-luhn](https://www.npmjs.com/package/luhn) package was used to validate card numbers with [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)