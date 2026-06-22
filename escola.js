const dadosDoAluno = require('./aluno.json');

console.log("--- sistema escolar ---");
console.log(`nome: ${dadosDoAluno.nome}`);
console.log(`curso: ${dadosDoAluno.curso}`);
console.log(`idade: ${dadosDoAluno.idade}`);

if (dadosDoAluno.bolsista) {
    console.log("status: este aluno possui isenção na mensalidade")
} else {
    console.log("status: mensalidade padrão.");
};
