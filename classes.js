class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    get ataque() {
        if (this.tipo === "mago") {
            return "magia";
        } else if (this.tipo === "guerreiro") {
            return "espada";
        } else if (this.tipo === "monge") {
            return "punho";
        } else if (this.tipo === "ninja") {
            return "shuriken";
        } else {
            return "ataque desconhecido";
        }
    }

    atacar() {
        return `O ${this.nome} atacou usando ${this.ataque}`;
    }
} 
let heroi1 = new heroi("Gandalf", 300, "mago");
let heroi2 = new heroi("Aragorn", 87, "guerreiro");
let heroi3 = new heroi("Liu Kang", 30, "monge");
let heroi4 = new heroi("Naruto", 17, "ninja");  

console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());