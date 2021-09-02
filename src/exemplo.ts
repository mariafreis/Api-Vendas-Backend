// typescript é tipado
let motor: boolean;
motor = true;
let idade: number; // int e float e double
idade = 20;
let nome: string;
nome = "Lucas Dias";
console.log(` Motor: ${motor} Idade: ${idade} Nome: ${nome}`);

let coisa: any; // recebe qualquer coisa
coisa = 10;
coisa = "dez";
coisa = true;

// vetores ou arrays
let jogadores = ["lucas dias", "lucao", "jorginho", "david jackson"];
let times: Array<string>;
times = ["Sesi Franca", "São Paulo", "Bauru", "Pinheiro"];

console.log(`Jogadores ${jogadores}`);
console.log(`Times ${times}`);

//exemplo de interface
interface Aluno {
  nome: string;
  nota: number;
  aprovado: boolean;
  situacao(): string;
}

let zeca: Aluno = {
    nome: "José da Silva Xavier",
    nota: 9,
    aprovado: false,
    situacao: function () {
        if (this.aprovado){
            return (`Aprovado`)
        }
        else {
            return (`Reprovado`)
        }
    }
}
console.log(zeca)
console.log(`${zeca.nome} ${zeca.nota} ${zeca.situacao()}`)

//interface com classe
interface Saudacao{
    bomDia(): string,
    boaTarde(): string
}

//implementa herança

class Funcionario {
    //variavel protegida que pode ser herdada
    protected atividade: string
    constructor(atividade: string){
        this.atividade = atividade
    }
    public exercerCargo():void{
        console.log(`A atividade é ${this.atividade}`)
    }
}

class Docente extends Funcionario implements Saudacao{
    
    private name: string;

    constructor(name: string, atividade:string){
        super(atividade); //chama construtor de docente
        this.name = name
    }

    bomDia(): string {
        return `Bom dia com alegria, ${this.name}`
    }
    boaTarde(): string{
        return `Boa tarde a todos, ${this.name}`
    }
}


let obj = new Docente("Daniel", "Coordenador")
console.log(obj.boaTarde())
console.log(obj.bomDia())
