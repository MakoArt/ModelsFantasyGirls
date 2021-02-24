const express=require('express')
const app=express()
const cors=require('cors')
const morgan=require('morgan')
const bodyParser=require('body-parser')

require('./database')

//asignación de puerto  

app.set('Port',4000)

//configurando morgan 

app.use(morgan('dev'))

//configuracion de body-parser 

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//cors configuración
app.use(cors({origin:'*'}))


//lanzar el servidor

app.listen(app.get('Port'),()=>{
    console.log('servidor corriendo por el puerto',app.get('Port'))
})
