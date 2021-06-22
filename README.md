
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
Create a modal
npx sequelize-cli model:generate --name Card --attributes name:string,number:string,cvv:string,expiry:string

Run DB migration
npx sequelize-cli db:migrate