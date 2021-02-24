const mongoose=require('mongoose')
URI=('mongodb://localhost/Fotografia')

mongoose.connect(URI,{
  
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db=>console.log('base de datos conectada '))
.catch(error=>console.log(error))

module.exports=mongoose