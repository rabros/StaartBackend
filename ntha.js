class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }

  pop(){
    this.itens.pop();
  }

  top(){
    return this.itens[this.itens.length - 1]; //item do topo
  }

  isEmpty(){
    return this.itens.length == 0;
  }
}

const pilha = new Pilha();

pilha.push([1, 'Vermelho']);
pilha.push([2, 'Verde']);
pilha.push([3, 'João']);
pilha.push([4, 'Nathaan']);
pilha.push([5, 'Luana']);

console.table(pilha.itens);

const pilha2 = new Pilha();

for (let i = 0; i < 10; i++){
    pilha2.push(pilha.top());  
    pilha.pop();
    i++;
}

console.table(pilha2.itens);
console.table(pilha.itens)
