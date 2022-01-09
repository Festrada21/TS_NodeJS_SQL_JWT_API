import { DataTypes} from "sequelize";
import db from "../tools/connection";


const Usuario = db.define("Usuario",
  {
    usuarioId: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,     
      primaryKey: true,
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
  },
  { timestamps: false }  
);

export default Usuario;