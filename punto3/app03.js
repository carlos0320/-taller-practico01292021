'use strict'
// ExpoEventos desea gestionar la venta de entradas a un evento
// épico, donde se tendrá la oportunidad de ver a Christina Aguilera
// cantando sus mejores éxitos, para lo cual se tienen 3 zonas
// definidas: VIP con 30 entradas, PLATINO con 50 entradas, y GENERAL
// con 100 entradas. Se debe controlar que existan entradas antes de
// venderlas.
// El menú del programa debe ser el que se muestra a continuación.
// 1. Mostrar número de entradas libres
// 2. Vender entradas
// 3. Salir
// Cuando se elige la opción 2 se debe preguntar para que zona
// queremos la entrada y cuantas entradas se quieren comprar.
// Lógicamente el programa debe controlar que no se puedan
// vender más entradas de la cuenta.
// Si no existen entradas para una zona en particular se debe mostrar
// el mensaje: "Lo siento, las entradas para esa zona están agotadas"
// Si el número de entradas por vender es menor que el numero
// solicitado, se debe mostrar el mensaje: "Solo me quedan X entradas
// para esa zona"
// Si hay suficiente cantidad de entradas por vender, se debe mostrar
// el mensaje: "Aquí tiene sus X entradas, gracias." y se debe actualizar
// el número de entradas disponibles por cada zona.

class VIP {
    constructor() {
        this.entradas = 30;
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
class PLATINO {
    constructor() {
        this.entradas = 50;
    }
    getEntradas() {
        return this.entradas;
    }
    setEntradas(entradas) {
        this.entradas = entradas;
    }
    mostrarEntradas() {
        console.log(`El numero de entradas libres para Platino  es ${this.entradas}`);
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
class GENERAL {
    constructor() {
        this.entradas = 100;
    }
    getEntradas() {
        return this.entradas;
    }
    setEntradas(entradas) {
        this.entradas = entradas;
    }
    mostrarEntradas() {
        console.log(`El numero de entradas libres para General es ${this.entradas}`);
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
    let vip = new VIP();
    let platino = new PLATINO();
    let general = new GENERAL();
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