let frutas = new Array('Banana');
frutas.push('Maçã');
frutas.push('Tangerina'); // add na lista array
frutas.unshift('Abacaxi'); // Add e coloca em 1º na lista

frutas.pop(); //Retira o ultimo item da lista
frutas.shift(); 
frutas.splice(1, 1, 'Jabuticaba'); // index, quantidade, substituir
console.table(frutas);
