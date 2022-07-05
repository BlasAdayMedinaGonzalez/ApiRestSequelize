// import mysql from "mysql2/promise"; 
import config from "../config/config";
import Sequelize from "sequelize";


export const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: 'localhost',
    dialect: "mysql"
});


