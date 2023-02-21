//llamamos a express una libreria npm 
let express = require('express');
//Llamamos a la funcion  express
let app = express();
//Llamamos a mongoose
let mongoose = require("mongoose");
//Asignamos un puerto
let port = process.env.PORT || 8080;


//
app.configure(function(){
    //app.use(express.static(__dirname+'/'));
    //no se a explicado
    app.use(express.logger('dev'));
    //no se a explicado
    app.use(express.methodOverride());
});


let bodyParser = require('body-parser');
let { json } = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
require('./routes.js')(app)


app.listen(port);
console.log(`App por el puerto ${port}`);