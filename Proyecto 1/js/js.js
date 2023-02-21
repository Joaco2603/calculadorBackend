
//Canvas
let canvas = document.getElementById('canvas');
//Contexto grafico
let ctx = canvas.getContext('2d');
//fps
let fps = 30;

//Tama;o canva
//Ancho
let canvasX = 1000;
//Alto
let canvasY = 500;

let titulox, tituloy;

//Variables
let tablero;
let filas = 50;
let columnas=50;

//Colores

let blanco = '#fff';
let negro  = '#000';


    //Filas y columnas
    const crearMatrix2D =(f,c)=>{

        //Creamos un nuevo array
        let obj = new Array(f);
        //Creamos los objetos del array donde metemos las filas osea en cada una de las filas creadas creamos una cantidad de columnas con otro array que se mete dentro de este
        for(let y=0; y<f;y++){
            obj[y] = new Array(c);
        }
        return obj;
    }


const borrarCanvas =()=>{
    canvas.witdth = canvas.witdth;
    canvas.height = canvas.height;

}

let agente = function(x,y,estado){

    //Creamos los atributos
        this.x = x;
        this.y = y;
        this.estado = estado; //Vivo 1 o muerto 2
    
        this.estadoProx = this.estado; //Estado del siguiente ciclo
    
        this.vecinos = []; //Casillas alrededor
    
        //Metodo que a;ade vecinos
        this.addVecinos = function(){
    
            let xvecino;
            let yvecino;
            
            //Recorre la matriz
            for(let i=1;i<2;i++){
                for(let j=1; j<2;j++){
    
    //Esto es para que me tome nada mas el segundo digito
                    xvecino = (this.x + j + columnas) % columnas;
                    yvecino = (this.y + i + filas) % filas;
    //Descartamos el agente actual (no puede ser el vecino)
                    if(i!=0 || j!=0){
                        //A;adimos el tablero vecino.
                        this.vecinos.push(tablero[yvecino][xvecino])
                    }
                    
    
                }
            }
    
    
         }



         //Dibuja los cuadros y los colore
         
  this.dibuja = function(){

    var color;
    //Verifica y elige el color
    if(this.estado == 1){
      color = blanco;
    }
    else{
      color = negro;
    }

    ctx.fillStyle = color;
    ctx.fillRect(this.x*tileX, this.y*tileY, tileX, tileY);

  }


//Dibuja el tablero
    function dibujaTablero(obj){
        for(let y=0;y<filas;y++){
        for(let x=0;x<columnas;x++){
            obj[y][x].dibuja();
        }
    }
}


//Recive los blancos y negros y su estado  y su poscicion


const inicializaTablero = (obj)=>{
    let estado;


    //Recorremos el tablero
    for(let y = 0; y<filas; y++){
        for(let x = 0;x<columnas;x++){
            //Estado inicial
            estado = Math.floor(Math.random()*2);
            obj[y][x] = new agente(y,x,estado);
        }
    }
    //Recorre y a;ade a los vecinos
    for(let y=0; y<filas; y++){
        for(x=0; x<columnas; x++){
          obj[y][x].addVecinos();
        }
    }
}


tablero = crearMatrix2D(filas,columnas)

inicializaTablero(tablero)


const definir = ()=>{
    //Tama;o
    canvas.witdth = canvasX;
    canvas.height = canvasY;

    titulox = Math.floor(canvasX/filas);
    tituloy = Math.floor(canvasY/columnas);

    console.log(titulox);
}

const principal = ()=>{
    console.log('fps')
    borrarCanvas();
    dibujaTablero();
}



    
    definir();
    //Se divide por los fps para saber la cantidad de veces que se tiene que refrescar por segundo
    setInterval(() => {
        principal();
    }, 1000/fps);

}