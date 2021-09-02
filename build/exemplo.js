"use strict";
// typescript é tipado
var motor;
motor = true;
var idade; // int e float e double
idade = 20;
var nome;
nome = "Lucas Dias";
console.log(" Motor: " + motor + " Idade: " + idade + " Nome: " + nome);
var coisa; // recebe qualquer coisa
coisa = 10;
coisa = "dez";
coisa = true;
// vetores ou arrays
var jogadores = ["lucas dias", "lucao", "jorginho", "david jackson"];
var times;
times = ["Sesi Franca", "São Paulo", "Bauru", "Pinheiro"];
console.log("Jogadores " + jogadores);
console.log("Times " + times);
var zeca = {
    nome: "José da Silva Xavier",
    nota: 9,
    aprovado: false,
    situacao: function () {
        if (this.aprovado) {
            return ("Aprovado");
        }
        else {
            return ("Reprovado");
        }
    }
};
console.log(zeca);
console.log(zeca.nome + " " + zeca.nota + " " + zeca.situacao());
var Docente = /** @class */ (function () {
    function Docente(name) {
        this.name = name;
    }
    Docente.prototype.bomDia = function () {
        return "Bom dia com alegria, " + this.name;
    };
    Docente.prototype.boaTarde = function () {
        return "Boa tarde a todos, " + this.name;
    };
    return Docente;
}());
var obj = new Docente("Daniel");
console.log(obj.boaTarde());
console.log(obj.bomDia());
