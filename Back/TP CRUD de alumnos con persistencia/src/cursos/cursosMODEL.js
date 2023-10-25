import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Cursos = sequelize.define(
  "cursos",
  {
    Codigo: DataTypes.STRING,
    Nombre: DataTypes.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export { Cursos };
