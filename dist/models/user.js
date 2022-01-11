"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../tools/connection"));
const bcrypt = require("bcrypt");
module.exports = function (DataTypes) {
    const User = connection_1.default.define('users', {
        usuarioId: {
            type: DataTypes.UUID.toString().toLowerCase(),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        empleadoId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING.toString().toLowerCase(),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING.toString().toLowerCase(),
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaEdicion: {
            type: DataTypes.DATE,
        },
        Habilitado: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });
    return User;
};
//# sourceMappingURL=user.js.map