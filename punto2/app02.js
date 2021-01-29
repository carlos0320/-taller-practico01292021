'use strict'

class TarjetaRegalo {
    constructor(saldo) {
        this.saldo = saldo;
        this.numero = Math.floor(Math.random() * ((100000 + 1) - 1) + 1);
        if (this.numero < 10) {
            this.id = '0' + '0' + '0' + '0' + String(this.numero);
        } else if (this.numero < 100) {
            this.id = '0' + '0' + '0' + String(this.numero);
        } else if (this.numero < 1000) {
            this.id = '0' + '0' + String(this.numero);
        } else if (this.numero < 10000) {
            this.id = '0' + String(this.numero);
        } else {
            this.id = String(this.numero);
        }
    }
    getId() {
        return this.id;
    }

    getSaldo() {
        return this.saldo;
    }
    setSaldo(nuevoSaldo) {
        this.saldo = nuevoSaldo;
    }
    gasta(valor) {
        if (valor > this.saldo) {
            console.log(`Tarjeta nº ${this.id} – No tiene suficiente saldo para gastar ${valor}`);
        } else {
            this.saldo -= valor;
            console.log(`Tarjeta nº ${this.id} – Saldo ${this.saldo}`);
        }
    }
    fusionaCon(tarjeta) {
        this.nuevoSaldo = this.saldo + tarjeta.getSaldo();
        this.saldo = 0;
        tarjeta.setSaldo(0);
        return new TarjetaRegalo(this.nuevoSaldo);

    }
}
let t1 = new TarjetaRegalo(200);
let t2 = new TarjetaRegalo(520);
console.log(t1);
console.log(t2);
t1.gasta(200);
t2.gasta(5);
t2.gasta(200);
t1.gasta(50);
console.log(t1);
console.log(t2);
let t3 = t1.fusionaCon(t2);
console.log(t1);
console.log(t2);
console.log(t3);