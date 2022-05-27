const saldocontas = [100, 200, 3.6, 98.3, 100, 1089];

const total = saldocontas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);

var numeros = [0, 7, 2, 3, 4, 7, 6];
var total = numeros.reduce((acumulador, numero) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
return acumulador + numero;
})
console.warn('acaboooou');
console.log(total);
