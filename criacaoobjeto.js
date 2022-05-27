class atleta {
  constructor(nome, idade, altura, peso, fut = []) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.fut = fut;
  }
}

const joao = new atleta('João Barros', 22, 1.8, 65, ['Inter', 'Arsenal']);
const kaue = new atleta('Kauê Brenno', 22, 1.82, 79, ['Santos', 'Spurs']);

console.table(joao);
console.table(kaue);

for(const propriedade in joao){
  console.log(`${propriedade}: ${joao[propriedade]}`)
}

for(const propriedade in kaue){
  console.log(`${propriedade}: ${kaue[propriedade]}`)
}
