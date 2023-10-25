const Categoria=require('../models/categories.model')
//Todas las categorías  - SELECT *From categorias
exports.obtenerTodasCategorias = async(req, res)=>{
    try{
        const categoria=await Categoria.findAll();
        res.status(200).json({
            estado:1,
            mensaje:"Categorias encontradas",
            categoria:categoria
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

exports.obtenerCategoriaPorId= async(req,res)=>{
    const{id}=req.params;
    try{
        const categoria=await Categoria.findByPk(id)
        if(categoria==null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoria no encontrada"
            })
        }else{
            res.status(200).json({
                estado:1,
                mensaje:"Categoria encontrada",
                categoria:categoria
            })
        }
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }

}
exports.crearCategoria= async(req,res)=>{
    
    const{descripcion}=req.body;
    try{if(descripcion===undefined){
        res.status(400).json({
            estado:0,
            mensaje:"Bad request- faltan parametros"
        })}else{
            const categoria= await Categoria.create({descripcion:descripcion})
            res.status(200).json({
                estado:1,
                mensaje:"Categoria creada correctamente",
                categoria:categoria
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
exports.actualizarCategoria= async(req,res)=>{
    const{ id}=req.params;
    const{ descripcion}=req.body;
    try{
        const categoria = await Categoria.findByPk(id);
        if(categoria===null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoría no encontrada"
            })
        }else{
            if(descripcion==undefined){
                res.status(400).json({
                    estado:0,
                    mensaje:"Faltan paramentros"
                })
            }else{
                await categoria.update({descripcion:descripcion});
                res.status(200).json({
                    estado:1,
                    mensaje:"categoria actualizada correctamente",
                    categoria:categoria

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
exports.eliminarCategoria= async(req,res)=>{
    const{id}=req.params
    try{
        const categoria=await Categoria.findByPk(id);
        if (categoria===null){
            res.status(404).json({
                estado:0,
                mensaje:"Categoría no encontrada"
            })
        }else{
            await categoria.destroy();
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