import { DataTypes } from "sequelize";
import db from "../tools/connection";


const Usuario = db.define(
  "Usuario",
  {
    usuarioId: {
      type: DataTypes.STRING,      
      primaryKey: true,
    },
    empleadoId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clave: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaEdicion: {
        type: DataTypes.DATE
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