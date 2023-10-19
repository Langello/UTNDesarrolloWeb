import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config();

const sequelize = new Sequelize("CRUD", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

const autenticar = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida exitosamente a la BD");
  } catch (error) {
    console.error("Error al conectar a la Base de Datos", error);
  }
};





export { sequelize, autenticar };

