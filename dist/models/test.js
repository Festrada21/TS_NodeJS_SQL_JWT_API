"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = __importDefault(require("../tools/connection"));
exports.Usuario = connection_1.default.define('Usuario', {
    usuarioId: {
        type: sequelize_1.DataTypes.UUID.toString().toLowerCase(),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    empleadoId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING.toString().toLowerCase(),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING.toString().toLowerCase(),
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fechaEdicion: {
        type: sequelize_1.DataTypes.DATE,
    },
    Habilitado: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
}, { timestamps: false });
function generateHash(Usuario) {
    if (Usuario === null) {
        throw new Error('No found user');
    }
    else if (!Usuario.changed('contraseña'))
        return Usuario.contraseña;
    else {
        let salt = bcryptjs_1.default.genSaltSync();
        return Usuario.contraseña = bcryptjs_1.default.hashSync(Usuario.contraseña, salt);
    }
}
function validatePassword(Usuario, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Usuario === null) {
            throw new Error('No found user');
        }
        else if (!Usuario.changed('contraseña'))
            return Usuario.contraseña;
        else {
            return yield bcryptjs_1.default.compare(password, Usuario.contraseña);
        }
    });
}
exports.Usuario.beforeCreate(generateHash);
exports.Usuario.beforeUpdate(generateHash);
module.exports = exports.Usuario;
//# sourceMappingURL=test.js.map