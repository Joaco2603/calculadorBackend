const { json } = require("body-parser");

module.exports = (app)=>{
    // app.get('/bienvenida',(req,res)=>res.send("<h1>Bienvenido a mi pagina</h1>"))
    // app.get('/despedida',(req,res)=>res.send("<h1>Hasta luego</h1>"))
    // // app.get('/indice',(req,res)=>res.sendfile('indice.html'));
    // app.get("/indice",(req,res)=>{
    //     let username = req.query.username;
    //     let password = req.query.password;
    //     if(username == "sisoy" && password == "creeme"){
    //         res.sendfile("indice.html");
    //     }else{
    //         res.send("no andes jakiando....")
    //     }
    // })
    // app.get("/jsjuego",(req,res)=>{
    //     res.sendfile("Proyecto 1/js/js.js");
    // })
    // app.get("/cssjuego",(req,res)=>{
    //     res.sendfile("Proyecto 1/css/app.css");
    // })
    // app.get("/html",(req,res)=>{
    //     res.sendfile("./Proyecto 1/app.html");
    // })
    app.get('/inicio',(req,res)=>{
        res.sendfile('calculadora.html');
    })
    app.get('/peticiones',(req,res)=>{
        res.sendfile("peticiones.js");
    })
    app.post('/suma',(req,res)=>{
        let operando1 = req.body.operando1,
        operando2 = req.body.operando2,
        resultado = parseInt(operando1) + parseInt(operando2);
        res.send(JSON.stringify(resultado));
    })
    app.post('/resta',(req,res)=>{
        let operando1 = req.body.operando1,
        operando2 = req.body.operando2,
        resultado = parseInt(operando1) - parseInt(operando2);
        res.send(JSON.stringify(resultado));
    })
    app.post('/multiplicacion',(req,res) =>{
        let operando1 = req.body.operando1,
        operando2 = req.body.operando2,
        resultado = parseInt(operando1) * parseInt(operando2);
        res.send(JSON.stringify(resultado));
    })
    app.post('/division',(req,res)=>{
        let operando1 = req.body.operando1,
        operando2 = req.body.operando2,
        resultado = parseInt(operando1) / parseInt(operando2);
        res.send(JSON.stringify(resultado));
    })
}