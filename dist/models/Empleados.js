"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../tools/connection"));
const Empleados = connection_1.default.define("Empleados", {
    empleadoId: {
        type: sequelize_1.DataTypes.UUID.toString().toLowerCase(),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    paisId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    codigoEmpleado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Porfavor ingrese el codigo del empleado.'
            }
        }
    },
    identificacionId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor ingrese la identificación del empleado.'
            }
        }
    },
    numeroIdentificacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Poresa ingrese el número de identificación del empleado.'
            }
        }
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor ingrese los nombres del empleado.'
            }
        }
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Posr favor ingrese los apellidos del empleado.'
            }
        }
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fechaAlta: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaBaja: {
        type: sequelize_1.DataTypes.STRING,
    },
    estadoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    generoId: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, { timestamps: false });
exports.default = Empleados;
//# sourceMappingURL=Empleados.js.map