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
const pessoa = new Object({
    nome: 'Zé Vaqueiro',
    idade: 25,
    profissão: 'Cantor/Compositor'
});

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

console.log(pessoa);

const pessoa2 = { ...pessoa, hobby: 'Vaquejada'}
console.log(pessoa2);

// Atribuição por desestruturação
const { nome, idade } = pessoa2;
console.log(nome, idade);

// Construtor
function Product(name, sto, ram, price, qty, category){
    this.name = name;
    this.sto = sto;
    this.ram = ram;
    this.price = price;
    this.qty = qty;
    this.category = category;
}

const p1 = new Product('IPhone', 256, 16, 5000, 10, 'Celular');
const p2 = new Product('IPad', 512, 16, 8000, 20, 'Tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook');
const p4 = new Product('IPhone Pro Max', 256, 16, 7000, 15, 'Celular');
const p5 = new Product('IPad Pro', 512, 16, 10000, 25, 'Tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook');

const estoque = [ {...p1}, {...p2}, {...p3}, {...p4}, {...p5}, {...p6}];
console.log(estoque);

/* DESAFIO 1

    a) Valor total de todos os produtos em estoque
    b) Ordene os produtos por nome (crescente/crescente)
    c) Ordene os produtos por preço (crescente/crescente)
    d) Filtre os produtos de acordo uma categoria

*/

// a)
const valorTotal = estoque.reduce((valor, p) => valor + p.price * p.qty, 0).toFixed(2);
console.log(`Valor total: R$ ${valorTotal}`);

// b)
const nomeCrescente = [...estoque].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log('Ordem crescente:', nomeCrescente);

const nomeDecrescente = [...estoque].sort((a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
});
console.log('Ordem decrescente:', nomeDecrescente);

// c)
const precoCrescente = [...estoque].sort((a, b) => {
    return a.price - b.price;
});
console.log('Preço crescente:', precoCrescente);

const precoDecrescente = [...estoque].sort((a, b) => {
    return b.price - a.price;
});
console.log('Preço decrescente:', precoDecrescente);

// d)
const celulares = estoque.filter(produto => produto.category === 'Celular');
console.log('Celulares:', celulares);

const tablets = estoque.filter(produto => produto.category === 'Tablet');
console.log('Tablets:', tablets);

const notebooks = estoque.filter(produto => produto.category === 'Notebook');
console.log('Notebooks:', notebooks);

/* DESAFIO 2
Questão 1 — Média de notas e filtro de aprovados
    Use map() e reduce() para gerar um novo array de objetos no formato:
        { nome: "Ana", media: 8 }
    Use filter() para manter apenas os alunos com média maior ou igual a 7.
    Use sort() para ordenar os alunos aprovados da maior média para a menor.

Questão 2 — Catálogo de filmes com busca e ordenação
    Crie uma função que:
    Receba um gênero como parâmetro e use filter() para retornar apenas os filmes daquele gênero.
    Receba também um critério de ordenação e use sort() para ordenar:
        por ano, do mais recente para o mais antigo; ou
        por título, em ordem alfabética.
    Use map() para transformar o resultado em um array de strings com o formato:
        "Interestelar (2014) - ficção";
*/

//Questão 1:
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];
const aprovados = alunos.map((aluno) => {
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / aluno.notas.length;

    return {
      nome: aluno.nome,
      media: Number(media.toFixed(2)),
    };
  })
  .filter((aluno) => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);
console.log(aprovados);


// Questão 2:
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  return filmes
    .filter((filme) => filme.genero === genero)
    .sort((a, b) => {
      if (criterio === "ano") {
        return b.ano - a.ano;
      }
      if (criterio === "titulo") {
        return a.titulo.localeCompare(b.titulo);
      }

      return 0;
    })
    .map(
      (filme) =>
        `${filme.titulo} (${filme.ano}) - ${filme.genero}`
    );
}
console.log(buscarFilmes("ficção", "ano"));