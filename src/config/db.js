// establecer la conexión con un dialecto = mysql
const { Sequelize } = require("sequelize");

const db=process.env.MYSQLDATABASE22|| 'tienda';
const user= process.env.MYSQLUSER||'root';
const password=process.env.MYSQLPASSWORD|| '';
const sequelize = new Sequelize("tienda", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexión con la base de datos.");
} catch (error) {
  console.error("No se pudo establecer la conexión.", error);
}

// Para poder usar esta conexión en los controladores
module.exports = sequelize;
