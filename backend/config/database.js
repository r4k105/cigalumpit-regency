import { Sequelize } from "sequelize";


const db = new Sequelize('crud_db','root','Root@2025', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;