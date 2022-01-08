"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../tools/connection"));
const Usuario = connection_1.default.define("Usuario", {
    usuarioId: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    empleadoId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    clave: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fechaEdicion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    Habilitado: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
}, { timestamps: false });
exports.default = Usuario;
//# sourceMappingURL=usuarios.js.map