import { DataTypes } from 'sequelize';

import {sequelize} from '../db.js';



const Alumno = sequelize.define('alumno', {
  
  Nombre: DataTypes.STRING,
  Apellido: DataTypes.STRING,
  Email: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: DataTypes.DATE,
  password: DataTypes.STRING

}, {
  timestamps: false,
  freezeTableName: true,
});

export {Alumno};