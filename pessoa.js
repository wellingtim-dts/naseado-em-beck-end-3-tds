class Pessoas {
    constructor(nome, cpf, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.altura = altura;
    }

    nome() {
        console.log(`O nome da pessoa é ${this.nome}`);
    }
}

class Estudante extends Pessoas {
    constructor(nome, cpf, idade, altura, CRM) {
        super(nome, cpf, idade, altura);
        this.CRM = CRM;
    }

    nome() {
        console.log(`O nome do estudante é ${this.nome}`);
    }
} 