'use strict'

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    setX(nuevoX) {
        this.x = nuevoX;
    }
    getY() {
        return this.y;
    }
    setY(nuevoY) {
        this.y = nuevoY;
    }
}

class Linea {
    constructor(punto1, punto2) {
        this.punto1 = punto1;
        this.punto2 = punto2;
    }
    mostrarLinea() {
        return `Linea formada por los puntos (${this.punto1.getX()}, ${this.punto1.getY()}) y (${this.punto2.getX()} ,${this.punto2.getY()})`;
    }
}
let punto1 = new Punto(4.21, 7.3);
let punto2 = new Punto(-2, 1.66);
let objLinea = new Linea(punto1, punto2);
console.log(objLinea.mostrarLinea());