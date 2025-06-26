import { Sequelize,DataTypes } from "sequelize";
import db from "../config/Database.js";



const User = db.define('users', {
    ktp: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    telepon: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING
},{
    freezeTableName: true
});

export default User;

(async()=>{
    await db.sync();
})();