// Cadastro de Aluno

const nomeCompleto = "João Silva Sauro";
const numeroMatricula = 2024001
const emailContato = "joao.silva@escola.com"
const dataNascimento = "2010-05-15"
const statusMatricula = "Ativa"

let notaMatematica = 8
let provaMatématica = 3
let notaPortuguês = 6
let provaPortuguês = 2

let somaDasnotas = notaMatematica + notaPortuguês
let mediaFinal = somaDasnotas / 2

console.log (`a nota dele em matematica e ${notaMatematica} e a nota em português e ${notaPortuguês} e a nota na prova de matematica e ${provaMatématica} e a nota da prova de portugês ${provaPortuguês} e a media dessas notas é ${mediaFinal}`)

console.log ( `
    o nome completo dele é ${nomeCompleto}, ele nasceu em ${dataNascimento}, o email de contato é ${emailContato},
     o número de matrícula é ${numeroMatricula} e a matrícula dele ainda tá ${statusMatricula}`) 