import {Sequelize} from 'sequelize';

//TODO configurar o base de dados
const db = new Sequelize('DBARS', 'sa', 'abc123**', 
{
    host: 'localhost',
    dialect: 'mssql',
    port: 1500
});

export default db;