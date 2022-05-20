const meuConjunto = new Set();

const times = ['São Paulo', 'Internacional', 'Grêmio', 'Flamengo','Santos', 'Internacional'];
const champs = new Set(times);
//console.table(champs);

const conjunto = new Set();

conjunto.add('João');
conjunto.add('João');
conjunto.add(2022);
conjunto.add(true);
conjunto.add(true);
conjunto.add(['João', 'Brenda']);
const jb = ['João', 'Brenda'];
conjunto.add(jb);
conjunto.delete(jb);
// conjunto.clear(); //Apaga tudo

conjunto.forEach((valor) => { // Mostra os valores
  console.table(valor)
})

/*
const valoresconjunto = conjunto.values(); // Mostra os valores
for (let valor of valoresconjunto){
console.table(valor);
}
*/

const entradas = conjunto.entries(); // Duplica (explicação aulas depois de sets(conjunto))
for (let entrada of entradas){
  console.table(entrada);
}

const corredores = new Set(['João', 'Kauê', 'Luccas']);

if(!corredores.has('Victor')){ 
  corredores.add('Victor');
}// add se não tiver

console.table(corredores);
