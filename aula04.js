// FUNÇÕES!!!!

let x = "nada";
console.log(x)
x = "Oi"
y = "Tchau"

// Declaração de função

imprimeTexto(y)

// 1) Declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Chamar/executar a função

imprimeTexto(x)
imprimeTexto("Eu sou aluno")

function soma(){
    return 2 + 2
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4, 7))
imprimeTexto(somaDeNumeros(24, 11))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return ` Meu nome é ${nome} e minha idade é ${idade}`
}
// A ordem dos parâmetros é importante!!
imprimeTexto(nomeIdade("André", 17))
imprimeTexto(nomeIdade(18, "Kauani"))

imprimeTexto(multiplicacao())
// Você pode definir um parâmetro inicial para sua função!
function multiplicacao(numero4 = 2,  numero5 = 5){
    return numero4 * numero5
}

imprimeTexto(multiplicacao(somaDeNumeros(3,4), somaDeNumeros(5,10)));

// expressão de função

const constanteSoma = function(nume1, nume2){return nume1 + nume2}

console.log(constanteSoma(3,6))

// Funções e var são "Listadas" no topo do arquivo

// Arrow function

const apresentaArrow = nome => `meu nome é ${nome}`;
const somaEmFlecha = (nu1, nu2) => nu1 + nu2;

console.log(apresentaArrow("André"))
console.log(somaEmFlecha(2,4))

const SomaNumeroPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "Essa função é apenas para números pequenos"
    } else {
        return num1 + num2 
    }
}

console.log(SomaNumeroPequenos(2,3))