const golesCtl ={}
const orm =require('../conf/dataBase.orm')
const sql=require('../conf/database.sql')

golesCtl .mostrar=(req,res)=>{
    res.render('goles/agregar');
}

//mandar
golesCtl .mandar=async(req,res)=>{
    const id =req.user.id_usuario
    const {goles,fecha_puclicacion}=req.body
    const nuevoEnvio={
        goles,
        fecha_puclicacion
    }
    await orm.comentario.create(nuevoEnvio)
    req.flash('success','Guardado exitosamente')
    res.redirect('/goles/listar/'+id)
}

golesCtl .listar=async(req,res)=>{
    const lista=await sql.query('select * from goles')
    res.render('goles/listar',{lista})
}

//traer datos
golesCtl .traer=async(req,res)=>{
    const ids=req.params.id
    const lista =await sql.query('select * from goles where id_goles =?',[ids])
    res.render('goles/editar',{lista})
}

golesCtl .actualizar=async(req,res)=>{
    const id =req.user.id_usuario
    const ids=req.params.id
    const {goles, fecha_puclicacion}=req.body
    const nuevoEnvio={
        goles,
        fecha_puclicacion
       
    }
    await orm.goles.findOne({where:{id_goles:ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
    })
    req.flash('success','Actualizado exitosamente')
    res.redirect('/goles/listar/'+id);
}
golesCtl .eliminar= async(req,res) =>{
   const ids= req.params.id
   const id =req.user.id_usuario
   await orm.goles.destroy({where:{id_goles:ids}})
   .then(()=>{
   req.flash('success','Eliminado exitosamente')
   res.redirect('/goles/listar/'+id);   
   })
}


module.exports=golesCtl 