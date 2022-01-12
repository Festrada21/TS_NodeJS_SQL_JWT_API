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
    Habilitado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { timestamps: false }
);

export default Empleados;