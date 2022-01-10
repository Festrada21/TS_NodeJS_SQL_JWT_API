'use strict';
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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = __importDefault(require("../tools/connection"));
module.exports = (sequelize, DataTypes) => {
    const Usuario = connection_1.default.define('Usuario', {
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
    }, { timestamps: false });
    Usuario.prototype.validatePassword = function (contraseña) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compareSync(contraseña, this.contraseña);
        });
    };
    return Usuario;
};
//# sourceMappingURL=Usuario.js.map