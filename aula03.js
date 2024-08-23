// Alguns erros comuns

//const numero: Primeiro erro nao declarar uma constante


const minhaVar="oi" // 2° erro: nao declarar uma variavel e chamar no codigo
console.log(minhaVar); // exemplo: chamar minhavar com V minusculo

console.error('isso esta errado') // 3° "erro": Voçe pode declarar um erro com o console.error:

// Condicional abreviada if() {}

let idadeMinima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("cerveja")
} else{
    console,log("todinho")
}

//Valor ternario
console.log(idadeCliente >= IdadeMinima ? "cerveja" : "agua")
// modo ternario, utilizado a estrutura ___ >= ___ ? ___ : ___
// modo ternario, utilizado a estrutura ___ <= ___ ? ___ : ___
// modo ternario, utilizado a estrutura ___ == ___ ? ___ : ___

//Template string

const name = "Leonardo";
const idade = 17;
const cidadeNatal = "sanjuan"

const apresentaçao = "Meu nome e" + Nome + ",minha idade e" + idade + "nasci em " + cidadeNatal;

console.log(apresentaçao)

//template string
const aoresentaçao = `Meu nome e ${nome}, minha idade e ${idade} e minha cidade natal e ${cidadenatal}`
console.log(apresentaçao2)

