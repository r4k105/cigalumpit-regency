import { Sequelize } from "sequelize";

const db = new Sequelize('cgrdb','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;