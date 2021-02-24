const mongoose=require('mongoose')
const {Schema}=mongoose 

const FotografosSchema=new Schema({
    
    nombre:String,
    estiloFotografia:String,
    contrasena:String, 
    correo:String



})

module.exports=mongoose.model('Fotografos',FotografosSchema)

