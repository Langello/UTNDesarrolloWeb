import { DataTypes } from 'sequelize';

import {sequelize} from '../db.js';



const Alumno = sequelize.define('User', {
  idAlumno: DataTypes.INTEGER,
  Nombre: DataTypes.STRING,
  Apellido: DataTypes.STRING,
  Email: DataTypes.STRING,
});

export {Alumno};