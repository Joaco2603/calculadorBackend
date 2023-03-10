//llamamos a express una libreria npm 
let express = require('express');
//Llamamos a la funcion  express
let app = express();
//Llamamos a mongoose
let mongoose = require("mongoose");
//Asignamos un puerto
let port = process.env.PORT || 8080;



//Genera una peticion post que pide las operaciones
app.configure(function(){
    // app.use(express.static(__dirname+'/'));
    //no se a explicado
    app.use(express.logger('dev'));
    //no se a explicado
    app.use(express.methodOverride());
});


const mongoAtlasUri = 'mongodb+srv://Joaquito26:jejb2603@cluster0.f26ihra.mongodb.net/?retryWrites=true&w=majority';
try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}
catch (error){
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


let bodyParser = require('body-parser');
let { json } = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
require('./routes.js')(app)


app.listen(port);
console.log(`App por el puerto ${port}`);