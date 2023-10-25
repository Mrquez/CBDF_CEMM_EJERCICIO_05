const {DataTypes } = require("sequelize");
const sequelize = require("../config/db"); //?

const Cliente = sequelize.define("Cliente", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
console.log(Cliente);
Cliente.sync()
.then(()=>{
  console.log('Tabla proveedor creada o ya existe')
})
.catch((error)=>{
  console.error('Error al crear la tabla Cliente:',error);
})
module.exports = Cliente;
