const express = require('express');
const routsCategorias= require('./src/routes/categories.route');
const routsProveedores= require('./src/routes/suppliers.route');
const routsClientes= require('./src/routes/clients.route');
const app= express();
const puerto= process.envPort || 3000;

//Configuracion del servidor
app.use(express.json())
app.use('/socios/v2/categorias',routsCategorias);
app.use('/socios/v2/proveedores',routsProveedores);
app.use('/socios/v2/clientes',routsClientes);
//Ejecutar el servidor 
app.listen(puerto,()=>{
    console.log("Servidor escuchando en el puerto :",puerto);

})