const FotografosControllers={}
const Fotografos=require('../models/Fotografo.model')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')







FotografosControllers.crearFotografo=async(req,res)=>{
   
    const{nombre,estiloFotografia,contrasena,correo}=req.body

    const nuevoFotografo=new Fotografos({
        nombre,estiloFotografia,contrasena,correo
    })
    const correoFotografo=await Fotografos.findOne({correo:correo})
    if(correoFotografo){
        res.json({
            mensaje:'Este fotografo ya existe en la base de datos'
        })
    }else{
        nuevoFotografo.contrasena=await bcrypt.hash(contrasena,10)
        const token=jwt.sign({_id:nuevoFotografo._id},'encriptada')
        await nuevoFotografo.save()
        res.json({
            mensaje:'Ya se ha creado tu cuenta',
            id:nuevoFotografo._id,
            nombre:nuevoFotografo.nombre,
            token

        })
    }
}


module.exports=FotografosControllers