/*
// Questão aberta - Esquenta
// Escreva um código que possua um array. Este array deve conter um valor numérico, uma string e um valor booleano. Imprima o valor contido em cada índice.

const numeroStringEBooleano = [10, "Lincon", true]

const primeiroElemento = numeroStringEBooleano [0]
const segundoElemento = numeroStringEBooleano [1]
const terceiroElemento = numeroStringEBooleano [2]

console.log(primeiroElemento, segundoElemento, terceiroElemento)
*/

const minhasStrings = ['cerveja', 'chopp', 'vinho']

const meusNumeros = [15, 09, 91]

const minhaListaDeVariasCoisas = ['Ruby', 7, true]

const meuNumeroSolitario = [2023]

const minhaListaVazia = []

// Prática Guiada II

// a)
const tamanhoMinhasStrings = minhasStrings.length
console.log(`Tamanho do array minhasStrings:`, tamanhoMinhasStrings)

const quartoElementoMinhasStrings = minhasStrings [3]
console.log(`Valor que está na posição 3 do array minhasStrings:`, quartoElementoMinhasStrings)

// b)
const temRuby = minhaListaDeVariasCoisas.includes('Ruby')
console.log(`minhasListaDeVariasCoisas inclui 'Ruby'?`, temRuby)

const temSete = minhaListaDeVariasCoisas.includes(7)
console.log(`minhasListaDeVariasCoisas inclui '7'?`, temSete)

const temTrue = minhaListaDeVariasCoisas.includes(true)
console.log(`minhasListaDeVariasCoisas inclui 'true'?`, temTrue)

// c)
const valorItemUnico = meuNumeroSolitario[0]
console.log(`Qual o valor do número solitário?`, valorItemUnico)

const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
console.log(`Qual o tamanho da lista meuNumeroSolitario?`, tamanhoMeuNumeroSolitario)


// Prática Guiada III

// a
const minhasStringsCopiaErrada = minhasStrings

//b)
minhasStringsCopiaErrada.push('livro')

//c)
console.log(`Array original`, minhasStrings)
console.log(`Cópia ERRADA`, minhasStringsCopiaErrada)

// d)
const minhasStringsCopiaCERTA = minhasStrings.slice()
console.log(`Cópia CERTA`, minhasStringsCopiaCERTA)

minhasStringsCopiaCERTA.splice(2, 2)

console.log(`Array original:`, minhasStrings)
console.log(`Cópia CERTA pós splice():`, minhasStringsCopiaCERTA)

// Exercícios de fixação

const numerosFixacao = [32, 4, 91, 10, 61, 721, 2017, 49, ]

const numerosFixacaoCopia = numerosFixacao.slice()

numerosFixacaoCopia.pop()
console.log(`Tirando o último elemento:`, numerosFixacaoCopia)

numerosFixacaoCopia.push(6)
console.log(`Adicionando o número 6 no final do array:`, numerosFixacaoCopia)

numerosFixacaoCopia.splice(2,1)
console.log(`Removendo o item que está na posição 2:`, numerosFixacaoCopia )

console.log(`Original:`, numerosFixacao)
console.log(`Cópia:`, numerosFixacaoCopia)