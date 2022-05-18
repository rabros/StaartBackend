class Fila {
  constructor(){
    this.itens = []
  }
  enqueue(item) {
    this.itens.push(item);
  }
  isEmpty(){
    return this.itens.lentgh == 0;
  }
  dequeue(){
    if (this.isEmpty()) return undefined

    return this.itens.shift();
  }
  front(){
    return this.itens[0];
  }
  rear(){
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila()
fila.enqueue('Siena');
fila.enqueue('Gol');
fila.enqueue('Astra');
fila.enqueue('Celta');
fila.dequeue();

console.table(fila.itens)
console.log(fila.isEmpty());
console.log(fila.front())
console.log(fila.rear())
