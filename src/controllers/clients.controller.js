const Cliente=require('../models/clients.model')
//Todas las categorías  - SELECT *From categorias
exports.obtenerTodosClientes = async(req, res)=>{
    try{
        const cliente=await Cliente.findAll();
        res.status(200).json({
            estado:1,
            mensaje:"Categorias encontradas",
            cliente:cliente
        })
    }catch(error){
        console.error("Error en la consulta:", error);
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido al mostrar todas las categorias"
        })
    }
}
//Una categoría por id

exports.obtenerClientePorId= async(req,res)=>{
    const{id}=req.params;
    try{
        const cliente=await Cliente.findByPk(id)
        if(cliente==null){
            res.status(404).json({
                estado:0,
                mensaje:"Cliente no encontrada"
            })
        }else{
            res.status(200).json({
                estado:1,
                mensaje:"Cliente encontrada",
                cliente:cliente
            })
        }
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }

}
exports.crearCliente= async(req,res)=>{
    
    const{nombre}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    try{if(nombre===undefined||direccion===undefined||telefono===undefined){
        res.status(400).json({
            estado:0,
            mensaje:"Bad request- faltan parametros"
        })}else{
            const cliente= await Cliente.create({nombre:nombre, direccion:direccion,telefono:telefono})
            res.status(200).json({
                estado:1,
                mensaje:"Cliente creada correctamente",
                cliente:cliente
            })
        }
        
    }catch(error){
        console.error("Error en la consulta:", error);
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }
}
exports.actualizarCliente= async(req,res)=>{
    const{ id}=req.params;
    const{ nombre}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    try{
        const cliente = await Cliente.findByPk(id);
        if(cliente===null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoría no encontrada"
            })
        }else{
            if(nombre==undefined||direccion===undefined||telefono===undefined){
                res.status(400).json({
                    estado:0,
                    mensaje:"Faltan paramentros"
                })
            }else{
                await cliente.update({nombre:nombre,direccion:direccion,telefono:telefono});
                res.status(200).json({
                    estado:1,
                    mensaje:"cliente actualizada correctamente",
                    cliente:cliente

                })
            }
        }
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }
}
exports.eliminarCliente= async(req,res)=>{
    const{id}=req.params
    try{
        const cliente=await Cliente.findByPk(id);
        if (cliente===null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoría no encontrada"
            })
        }else{
            await cliente.destroy();
            res.status(200).json({
                estado:1,
                mensaje:"Eliminado correctamente"

            })
        }
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"Error desconocido"
        })

    }
}
//Crear categoria
//Eliminar 