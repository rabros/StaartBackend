/*const contars = [10, 20, 30, 400];
const dolar = 5;
const contadl = contars.map((valor) => valor * dolar);

console.table(contadl);
// map 
// filter
// reduce
// find & findindex
// every => true or false (&&)
// some -> ture or false (||)
// concat  -> contatenar
// fill 
// flat => deixa em um array só (rascunho no java)

const tabela1 = [1, 2, 3, 4];
const tabela2 = [5, 6, 7, 8];

const tabela3 = tabela1.concat(tabela2);
console.table(tabela3);

//sort

const alunos = ['Gabriel', 'Joao', 'Pedro', 'Luccas', 'Kauê'];
console.table(alunos);
alunos.sort();
console.table(alunos);

const numeros = [2.3, 4.2, 10, 8.2, 30];
console.table(numeros);
numeros.sort((a, b) => a - b);
console.table(numeros);
*/

const alunos = [['Gabriel', 3],
['Joao', 5],
['Pedro', 2],
['Luccas', 1],
['Kauê', 4],
];
console.table(alunos);
alunos.sort((a, b) => b[1] - a[1]);
console.table(alunos);
