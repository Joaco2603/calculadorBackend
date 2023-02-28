
//llama a mongo
let mongoose = require('mongoose');
//Busca la propiedad esquema
let Schema = mongoose.Schema;

let calculadoramongo = new Schema({
    //Creamos una especie de clase que por ser de mongo es Schema 
    operando1:String,
    operando2:String,
    tipoOperacion:String,
    resultado:String
});
//Exportamos el modelo de moongose
module.exports = mongoose.model("Calculadoramongo",calculadoramongo);