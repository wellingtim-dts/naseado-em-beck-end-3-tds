const cardapio = [
  {nome: "x- burguer", preco: 18.90, catetegoria:"lanche"},
  {nome: "batata-frita", preco: 9.50, categoria: "acompanhamneto"},
  {nome: "sprite", preco: 4.50, categoria: "bebida"},
  {nome: "milkshake", preco: 12.00, categoria: "sobremesa"}
]

const pedido = [];

const cliente = {

    nome: ana,
 
    fidelidade: true
}

//console.log(cardapio[0].nome);
//console.log(cardapio[1].preco);
//console.log(cardapio[2].categoria);

function exibirCardapio(lista) {
  console.log("===CARDAPIO===");
  console.log(`1. ${lista[0].nome} - R$ ${lista[0].preco} - ${lista[0].categoria}`)
  console.log(`2. ${lista[1].nome} - R$ ${lista[1].preco} - ${lista[1].categoria}`)
  console.log(`3. ${lista[2].nome} - R$ ${lista[2].preco} - ${lista[2].categoria}`)
  console.log(`4. ${lista[3].nome} - R$ ${lista[3].preco} - ${lista[3].categoria}`)
}

function calcularTotal(listaPedido) {
  let total = listaPedido[0].preco + listaPedido[1].preco;
  return total;
}

function calcularComDesconto(total, clienteObj) {
  if (clienteObj.fidelidade === true) {
    let desconto = total * 0.10;
    console.log(`desconto fidelidade: R${desconto}`);
    return total - desconto
  }
  return total;
}

function exibirPedido(listaPedido, clienteObj){
  console.log("===SEU PEDIDO ===");
  console.log(`1. ${listaPedido[0].nome} - R$ ${listaPedido[0].preco}`)
  console.log(`2. ${listaPedido[1].nome} - R$ ${listaPedido[1].preco}`)
  console.log(`TOTAL: R$${calcularTotal(listaPedido)}`)
  
  let subtotal = calcularTotal(listaPedido) // calcular bruto
  let totalFinal = calcularComDesconto(subtotal, clienteObj) //Aplica o desconto
  console.log(`TOTAL FINAL : R$ {totalfinal}`)
}

exibirCardapio(cardapio)
exibirPedido(pedido)