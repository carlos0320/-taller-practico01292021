'use strict'

class Entrada{
    constructor(entradas){
        this.entradas=entradas;
    }
    getEntradas() {
        return this.entradas;
    }
    setEntradas(entradas) {
        this.entradas = entradas;
    }
    mostrarEntradas() {
        console.log(`El numero de entradas libres para VIP es ${this.entradas}`);
    }
    venderEntradas(entradas) {
        if (entradas > this.entradas) {
            console.log("Lo siento, las entradas para esa zona están agotadas");
        } else {
            this.entradas -= entradas;
            this.mostrarEntradas();
            console.log(`Aqui tiene sus ${entradas}, gracias!`);

        }

    }
    
}
class VIP extends Entrada{
    constructor(entradas) {
        super(entradas)
    }
   
}
class PLATINO extends Entrada {
    constructor(entradas) {
        super(entradas)
    }
    
}
class GENERAL extends Entrada{
    constructor(entradas) {
        super(entradas)
    }
   
}

function controlEntradas(opcion, vip, platino, general) {
    let numeroEntradas = 0;

    switch (opcion) {
        case 1:
            if (vip.getEntradas() > 0) {
                numeroEntradas = Number(prompt('ingrese por favor el numero de entradas que desea comprar'));
                vip.venderEntradas(numeroEntradas);
            } else {
                console.log("Lo siento, las entradas para esa zona están agotadas");
            }
            break;
        case 2:
            if (platino.getEntradas() > 0) {
                numeroEntradas = Number(prompt('ingrese por favor el numero de entradas que desea comprar'));
                platino.venderEntradas(numeroEntradas);
            } else {
                console.log("Lo siento, las entradas para esa zona están agotadas");
            }
            break;
        case 3:
            if (general.getEntradas() > 0) {
                numeroEntradas = Number(prompt('ingrese por favor el numero de entradas que desea comprar'));
                general.venderEntradas(numeroEntradas);
            } else {
                console.log("Lo siento, las entradas para esa zona están agotadas");
            }
            break;
    }
}

function principal() {
    let op = 0;
    let vip = new VIP(30);
    let platino = new PLATINO(50);
    let general = new GENERAL(100);
    let opcion = "";
    let numeroEntradas = 0;
    do {
        op = Number(prompt("Elija una opcion del menu (1,2,3) que desea realizar y que sea un NUMERO por favor!"));
        switch (op) {
            case 1:
                vip.mostrarEntradas();
                platino.mostrarEntradas();
                general.mostrarEntradas();
                break;
            case 2:

                opcion = Number(prompt('ingrese la entrada que desea comprar (1 para VIP, 2 para PLATINO,3 para GENERAL)'));
                controlEntradas(opcion, vip, platino, general);
                break;
            case 3:
                break;

        }
    } while (op != 3)
}

setTimeout(() => principal(), 7000);
