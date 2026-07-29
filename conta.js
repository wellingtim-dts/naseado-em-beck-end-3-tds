let saldoJOAO = 1000;
let saldoCarlos = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoJOAO * taxaJuros;

const contaJoao = {titular: "Joao", saldo: saldoJOAO};
const contaCarlos = {titular: "Carlos", saldo: saldoCarlos};
//console.log(saldoComJuros);
//console.log(`${contaJoao.titular} possui R$ ${contaJoao.saldo}`)
//console.log(`${contaCarlos.titular} possui R$ ${contaCarlos.saldo}`)

const contas = [contaJoao, contaCarlos];

contas.forEach((conta) => {
    console.log(`${conta.titular} tem R$ ${conta.saldo}`);
});

contaJoao.saldo = -5000;
console.log("saldo alterado sem controle:", contaJoao.saldo);