let Item = require("./calculadoraenmongo"); //Requiere la clase
exports.Guardar = (req,res)=>{ //Exporta la siguiente funcion 
    //Crea y guarda una funcion
    Item.create({
        //Crea el Schema
        operando1:req.body.operando1,
        operando2:req.body.operando2,
        resultado:req.body.resultado,
        tipoOperacion: req.body.tipoOperacion
    },function(err,item){ //Creamos un metodo
        if(err){
            res.send(err) //Deteccion de errores
        }
        else{
            Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                if(err){
                    res.send(err) //Deteccion de errores
                }else{
                    res.json(item); //Crea los JSON
                }
            })
        }
    })
}


exports.Modificar = (req,res)=>{
    //Actualiza los datos, mediante un id unico que tiene cada objeto se le indica a cual de todos se quiere modificar y con el set le indicamos los campos a modificar 
    Item.update({_id:req.body._id},{$set:{
        operando1:req.body.operando1,
        operando2:req.body.operando2,
        resultado:req.body.resultado,
        tipoOperacion:req.body.tipoOperacion
    }},function(err,item){ //Creamos un metodo
        if(err){
            res.send(err) //Deteccion de errores
        }
        else{
            Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                if(err){
                    res.send(err) //Deteccion de errores
                }else{
                    res.json(item); //Crea los JSON
                }
            })
        }
    })
}

exports.Eliminar = (req,res)=>{

    //Eliminina un objeto entero
    Item.remove({_id:req.body._id},
        function(err,item){ //Creamos un metodo
            if(err){
                res.send(err) //Deteccion de errores
            }
            else{
                Item.find(function(err,item){ //Metodo find encuentra todo Schema creado 
                    if(err){
                        res.send(err) //Deteccion de errores
                    }else{
                        res.json(item); //Crea los JSON
                    }
                })
            }
        })
}



exports.seleccionarTodos = function(req,res){

    Item.find( //Metodo find encuentra todo Schema creado 
        function(err,item){
            if(err){
                res.send(err) //Deteccion de errores
            }else{
                res.json(item); //Crea el json
            }
       

        }
    )
}


exports.seleccionarOperacion = function(req,res){

    Item.find({tipoOperacion:req.body.tipoOperacion}, //Metodo find encuentra todo tipodeOperacion creada que este en el Schema 
        function(err,item){
            if(err){
                res.send(err) //Deteccion de errores
            }else{
                res.json(item); //Crea el json
            }
        })
}