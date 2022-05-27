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

pilha.push(10);
pilha.push(20);
pilha.push('João');
pilha.push(40);

pilha.pop();
console.table(pilha.itens);
console.log(pilha.top())
console.log(pilha.isEmpty());
