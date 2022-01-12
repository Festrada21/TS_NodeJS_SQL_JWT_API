import { DataTypes } from "sequelize";
import db from "../tools/connection";


const Empleados = db.define(
  "Empleados",
  {
    empleadoId: {
        type: DataTypes.UUID.toString().toLowerCase(),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      paisId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigoEmpleado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Porfavor ingrese el codigo del empleado.'
        }
      }
    },
    identificacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor ingrese la identificación del empleado.'
        }
      }
    },
    numeroIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Poresa ingrese el número de identificación del empleado.'
        }
      }
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor ingrese los nombres del empleado.'
        }
      }
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Posr favor ingrese los apellidos del empleado.'
        }
      }
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaAlta: {
      type: DataTypes.STRING,
    },
    fechaBaja: {
      type: DataTypes.STRING,
    },
    estadoId: {
      type: DataTypes.INTEGER,
    },
    generoId: {
      type: DataTypes.INTEGER,
    }
  },
  { timestamps: false }
);

export default Empleados;