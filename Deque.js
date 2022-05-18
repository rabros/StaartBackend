// DEQUE //
class Deque{
  constructor(){
    this.itens = [];
  }
  insertfront(item){
    return this.itens.unshift(item);
  }
  insertlast(item){
    return this.itens.push(item);
  }
  deletefront(){
    if(this.isEmpty()) return undefined

    this.itens.shift();
  }
  deletelast(){
    if(this.isEmpty()) return undefined

    this.itens.pop();
  }
  isEmpty(){
    return this.itens.length == 0;
  }
  front(){
    return this.itens[0];
  }
  rear(){
    return this.itens[this.itens.length - 1];
  }
}

const deque = new Deque();
deque.insertfront('Joao');
deque.insertfront('Manu');
deque.insertfront('Pedro');
deque.deletefront();
deque.insertlast('Pai e Mãe');
//deque.deletelast();

console.table(deque.itens);
console.log(deque.front());
console.log(deque.rear());
