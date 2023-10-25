const {DataTypes } = require("sequelize");
const sequelize = require("../config/db"); //?

const Categoria = sequelize.define("Categoria", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Categoria.sync()
.then(()=>{
  console.log('Tabla categoria creada o ya existe')
})
.catch((error)=>{
  console.error('Error al crear la tabla Categoria:',error);
})
module.exports = Categoria;
