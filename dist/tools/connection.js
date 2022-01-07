"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//TODO configurar o base de dados
const db = new sequelize_1.Sequelize('DBARS', 'sa', 'abc123**', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1500
});
exports.default = db;
//# sourceMappingURL=connection.js.map