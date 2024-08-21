//,FUNÇOES!!!!

let x = "nada";
console.log(x)
x = "oi"
y = 'Tchau'

// Declaraçao de dunçao

imprimeTexto(y)

// 1) Declarar a funçao

function imprimeTexto(texto) {
    console. log (texto)
}

// 2) Chamar/executar a funçao 

imprimeTexto(x)
imprimeTexto(" EU sou aluno")

function soma(){
    return 2 + 2
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(someDeNumero(4, 7))
imprimeTexto(somaDeNumero(77, 33))

function somaDeNumeris(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome e ${nome} e minha idade e ${idade}`
}
// A ordem dos paramemtros e importemte
imprimeTexto(nomeIdade("Eduardo", 17))
imprimeTexto(nomeIdade(17, "Bia"))

imprimeTexto(multiplicaçao())
//Voce pode definir um parametro inicial para sua funçao
function multiplicaçao(numero4 = 2, numero5 =5){
    return numero4 * numero5
}

imprimeTexto(multiplicaçao(soma(3,4), soma (5, 10)))