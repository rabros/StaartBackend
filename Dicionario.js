const meuDicionario = new Map();
meuDicionario.set('Oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');
//meuDicionario.delete('vc');

if(meuDicionario.has('vc')) console.log('VC existe')
const palavra = meuDicionario.get('blz');
console.table(meuDicionario)

meuDicionario.forEach((valor, chaves) => {
  console.log(`${chaves}: ${valor}`);
})

for(let entrada of meuDicionario.entries()){
  console.log(entrada)
}

for(let valor of meuDicionario.values()){
  console.log(valor)
}

for(let chave of meuDicionario.keys()){
  console.log(chave)
}

console.log(meuDicionario.size)
const contatos = [
  ['Joao', '123456'],
  ['Pedro', '789456'],
  ['Rô', '132654'],
]

meuDicionario.set(contatos[0], 'nascimento: 15/10/99}');
meuDicionario.set(contatos[1], {nascimento: '01/07/11'});
meuDicionario.set(contatos[2], {nascimento: '06/04/77'});

//console.table(meuDicionario);
