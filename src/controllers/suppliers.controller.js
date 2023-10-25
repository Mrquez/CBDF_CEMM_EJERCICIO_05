const Proveedor=require('../models/suppliers.model')
//Todas las categorías  - SELECT *From categorias
exports.obtenerTodosProveedores = async(req, res)=>{
    try{
        const proveedor=await Proveedor.findAll();
        res.status(200).json({
            estado:1,
            mensaje:"Categorias encontradas",
            proveedor:proveedor
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

exports.obtenerProveedorPorId= async(req,res)=>{
    const{id}=req.params;
    try{
        const proveedor=await Proveedor.findByPk(id)
        if(proveedor==null){
            res.status(404).json({
                estado:0,
                mensaje:"Proveedor no encontrada"
            })
        }else{
            res.status(200).json({
                estado:1,
                mensaje:"Proveedor encontrada",
                proveedor:proveedor
            })
        }
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }

}
exports.crearProveedor= async(req,res)=>{
    
    const{nombre}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    try{if(nombre===undefined||direccion===undefined||telefono===undefined){
        res.status(400).json({
            estado:0,
            mensaje:"Bad request- faltan parametros"
        })}else{
            const proveedor= await Proveedor.create({nombre:nombre, direccion:direccion,telefono:telefono})
            res.status(200).json({
                estado:1,
                mensaje:"Proveedor creada correctamente",
                proveedor:proveedor
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
exports.actualizarProveedor= async(req,res)=>{
    const{ id}=req.params;
    const{ nombre}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    try{
        const proveedor = await Proveedor.findByPk(id);
        if(proveedor===null){
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
                await proveedor.update({nombre:nombre,direccion:direccion,telefono:telefono});
                res.status(200).json({
                    estado:1,
                    mensaje:"proveedor actualizada correctamente",
                    proveedor:proveedor

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
exports.eliminarProveedor= async(req,res)=>{
    const{id}=req.params
    try{
        const proveedor=await Proveedor.findByPk(id);
        if (proveedor===null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoría no encontrada"
            })
        }else{
            await proveedor.destroy();
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