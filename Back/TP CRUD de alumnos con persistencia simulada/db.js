const { Sequelize } = require('sequelize');

import dotenv from 'dotenv';
dotenv.config();




const autenticar = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida exitosamente  la BD');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  sequelize: new Sequelize('CRUD', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  })
}


