const {DataTypes } = require("sequelize");
const sequelize = require("../config/db"); //?

const Proveedor = sequelize.define("Proveedor", {
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
console.log(Proveedor);
Proveedor.sync()
.then(()=>{
  console.log('Tabla proveedor creada o ya existe')
})
.catch((error)=>{
  console.error('Error al crear la tabla Proveedor:',error);
})
module.exports = Proveedor;
