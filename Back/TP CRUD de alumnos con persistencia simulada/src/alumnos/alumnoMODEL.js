import { DataTypes } from 'sequelize';

import {sequelize} from '../db.js';



const Alumno = sequelize.define('alumno', {
  
  Nombre: DataTypes.STRING,
  Apellido: DataTypes.STRING,
  Email: DataTypes.STRING,

}, {
  timestamps: false,
  freezeTableName: true,
});

export {Alumno};