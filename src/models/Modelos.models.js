const mongoose=require('mongoose')
const {Schema}=mongoose 

const ModelosSchema=new Schema({
    
    nombre:String,
    edad:Number,
    pelo:String,
    alturaCm:Number,
    nacionalidad:String,
    imagen:String

})

module.exports=mongoose.model('Modelos',ModelosSchema)

