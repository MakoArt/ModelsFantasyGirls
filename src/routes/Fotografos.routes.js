const{Router}=require('express')
const router=Router()
const FotografoController=require('../controllers/Fotografos.controllers.js')


router.post('/subscribir',FotografoController.crearFotografo)




module.exports=router





