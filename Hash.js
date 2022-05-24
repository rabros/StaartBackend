class hashTable{
  constructor(){
    this.table = new Array(128);
    this.size = 0;
  }

  hash(key){
    let hash = 0
    for(let i=0; i <key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  put(key, value){
    const index = this.hash(key);
    this.table[index] = [key, value];
    this.size++;
  }
  get(key){
    const index = this.hash(key);
    return this.table[index];
  }
  delete(key){
    const index = this.hash(key);
    if (this.table[index] && this.table[index].length){
      this.table[index] = undefined
      this.size--;
      return true
    }
    else{
      return false;
    }
  }
  clear(){
    this.table = [];
    this.size = 0;
  }
}

const listacontatos = new hashTable();
listacontatos.put('Joao', '123456');
listacontatos.put('Pedro', '789456');
listacontatos.put('Rô', '132654');

console.table(listacontatos.table)
console.log(listacontatos.get('Joao'));
