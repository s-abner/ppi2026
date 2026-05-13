/*
    Programação para Internet - 2026
    Professor: Guilherme Leal
*/

// Ativar o formatador Prettier
// ALT + SHIFT + F

// Aula 06/05 - Introdução à JavaScript

console.log('Bem vindo a PPI!');

// variáveis
let name = 'João';
let age = 17;
let isStudent = true;

const PI = 3.14; // const = não pode mudar de valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = '5' + 5; // concatenação
let z = 'Hello' + 5;

console.log(x**2, y, z);
console.log(typeof x);

// Operadores relacionais > < >= <= == != === !==
console.log('5' != 5); // Diferença
console.log('5' == 5); // Compara tipo OU valor
console.log('5' === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++);
console.log(x);
console.log(++x);

// x++;
// ++x;
// x += 1;
// x = x + 1;

// Operadores lógicos && (AND) || (OR) ! (NOT)
let isExpression = true && 5+2*3 < 10 || false;
console.log(isExpression);

// if...else
// if (condition) {
//     // condition === true
// } else {
//     // condition === false
// }

// Template Strings
let text = `React é 'tudo de bom!'
Programar é minha vida!/
Eu amo o IFRN!`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.length); // Tamanho
console.log(fruits[0])

// Insere um elemento no final do array
fruits.push('Kiwi');
console.log(fruits);

// Remove e retorna o último elemento do array
console.log(fruits.pop());
console.log(fruits);

// Remove e retorna o primeiro elemento do array
console.log(fruits.shift());
console.log(fruits);

// Insere um elemento no começo do array
fruits.unshift('Lemon');
console.log(fruits);

// Argumento 1 - posição
// Argumento 2 - qts elementos serão removidos
// Argumento 3 - lista de elementos que serão inseridos
fruits.splice(2, 0, 'Kiwi', 'Blueberry');
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// Desafio - substitui 'Apple' por 'Kiwi'
fruits.splice(3, 1, 'Kiwi');
console.log(fruits);

// Busca índice do elemento 'Kiwi'
let index = fruits.indexOf('Kiwi');
console.log(index);

fruits.splice(index, 1, 'Apple');
console.log(fruits);

// Ordem crescente
fruits.sort(); // toSorted()
console.log(fruits);

// Ordem decrescente
fruits.reverse(); // toReversed()
console.log(fruits);

console.log('Sort/Reversed')
let fruitsSort = fruits.toSorted(); // Não altera o array original
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); // Não altera o array original
console.log(fruits);
console.log(fruitsReverse);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// Desafio - criar um array 'numbers2' que dupliquem os valores de 'numbers'
// Output: [90, 8, 18, 32, 50]
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers2.push(numbers[i]*2);    
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
    return value * 2;
}

const numberMap = numbers.map(myFunction);
console.log(numberMap);

console.log(numbers.map( (number) => number*2 ));

console.log(numbers.toSorted((a, b) => a - b)); // Ordem crescente
console.log(numbers.toSorted((a, b) => b - a)); // Ordem decrescente


numbers.sort((a, b) => a - b);
// Maior valor
console.log(numbers[numbers.length - 1]);
// Menor valor
console.log(numbers[0]);

// ---------------------------------------------------------
// Aula 13/05 - Funções, array destructuring, spread operator

const fruits2 = ['Kiwi', 'Avocado'];
console.log([...fruits2, 'Grape']);

// Spread  - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra "A"
const out = [];
const letra = 'a';
// for (let i = 0; i < fruits3.length; i++) {
//     const fruit = fruits3[i];
//     //toLowerCase - minúscula, toUpperCase - maiúscula
//     if (fruit[0].toLowerCase() === letra) {
//         out.push(fruit)
//     }
// }

// fruits3.map((fruit) => {
//     if (fruit[0].toLowerCase() === letra) {
//         out.push(fruit)
//     }
// });

// find - retorna a primeira ocorrência de acordo com a condição
let outFind = fruits3.find(
    (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFind);

// filter - retorna TODAS ocorrência de acordo com a condição
let outFilter = fruits3.filter(
    (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
    soma += number;
});
console.log(soma);

// reduce
console.log(
    numbers.reduce((soma, number) => soma + number)
);

// Object
const pessoa = {
    nome: 'Zé Vaqueiro',
    idade: 25,
    profissão: 'Cantor/Compositor'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);