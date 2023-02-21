class Calculadora{
    constructor(operando1,
    operando2,
    tipoOperacion,
    resultado)

{
    this.operando1 = operando1;
    this.operando2 = operando2;
    this.tipoOperacion = tipoOperacion;
    this.resultado = resultado;

}

Sumar(){

    let objectSend = this;
    return new Promise((resolve, reject) => {
        
        try {
            let xhr = new XMLHttpRequest();
            xhr.open('POST','/suma');
            xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr);
                    }
                    xhr.send(JSON.stringify(objectSend));
                }
        } catch (error) {
            reject(error.message);
        }
    });

}

Restar(){

    let objectSend = this;
    return new Promise((resolve, reject) => {
        
        try {
            let xhr = new XMLHttpRequest();
            xhr.open('POST','/resta');
            xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr);
                    }
                    xhr.send(JSON.stringify(objectSend));
                }
        } catch (error) {
            reject(error.message);
        }
    });

}

Multiplicar(){

    let objectSend = this;
    return new Promise((resolve, reject) => {
        
        try {
            let xhr = new XMLHttpRequest();
            xhr.open('POST','/multiplicacion');
            xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr);
                    }
                    xhr.send(JSON.stringify(objectSend));
                }
        } catch (error) {
            reject(error.message);
        }
    });

}

    Dividir(){

        let objectSend = this;
        return new Promise((resolve, reject) => {
            
            try {
                let xhr = new XMLHttpRequest();
                xhr.open('POST','/division');
                xhr.setRequestHeader('Content-Type','application/json');
                    xhr.onload = function() {
                        if (xhr.status == 200) {
                            resolve(JSON.parse(xhr.responseText));
                        }else{
                            reject(xhr);
                        }
                        xhr.send(JSON.stringify(objectSend));
                    }
            } catch (error) {
                reject(error.message);
            }
        });

    }

}


