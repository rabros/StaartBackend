class No{
  constructor(elemento){
    this.elemento = elemento;
    this.proximo = undefined
  }
}

class listaEncadeada{
  constructor(){
    this.head = undefined;
  }

  insertfirst(elemento){
    const novo = new No(elemento)
    let atual
    
    if(!this.head){
      this.head = novo;
    }
    else{
      atual = this.head
      novo.proximo = atual
      this.head = novo
    }
    return elemento;
  }

  insertlast(elemento){
    const novo = new No(elemento);
    let atual;

    if(!this.head){
      this.head = novo;
    }
    else{
      atual = this.head;
      while (atual.proximo){
        atual = atual.proximo
      }
      atual.proximo = novo;
    }
    return elemento;
  }

  searchat(posicao){
    let atual = this.head
    for(let i = 0; i < posicao && atual; i++){
      atual = atual.proximo
    }
    return atual;
  }

  insertat(elemento, posicao){
    const novo = new No(elemento)
    if(posicao == 0){
      this.insertfirst(elemento);
    }
    else{
      const anterior = this.searchat(posicao - 1)
      const atual = anterior.proximo
      novo.proximo = atual
      anterior.proximo = novo;
    }
    return elemento;
  }

  traversal(){
    if (!this.head){
      return undefined
    }
    else{
      let atual = this.head
      let elementoslista = []
      while(atual){
      elementoslista.push(atual.elemento)
      atual = atual.proximo;
       }
    return elementoslista;
    }
  }

  deleteat(posicao){
    let atual = this.head;
    if(posicao == 0){
      this.head = atual.proximo;
    }
    else{
      let anterior = atual;
      for(let i = 0; i < posicao; i++){
        anterior = atual
        atual = atual.proximo
      }
      anterior.proximo = atual.proximo;
    }
    return posicao;
  }

  indexof(elemento){
    let atual = this.head;
    let contador = 0;
    while(atual){
      if(atual.elemento == elemento){
        return contador
        break
      }
      else{
        atual = atual.proximo;
        contador++;
      }
    }
    return undefined;
  }
}

const trem = new listaEncadeada()

console.log(trem.insertfirst('Locomotiva'));
console.log(trem.insertlast('Vagao 1'));
console.log(trem.insertlast('Vagao 2'));
console.log(trem.searchat(2));
console.log(trem.insertfirst('Vagao de cabeça'))
console.log(trem.insertat('Novo Vagão', 2));
console.log(trem.deleteat(2));
console.log(trem.deleteat(0));
console.log(`Posicao da Locomotiva: ${trem.indexof('Locomotiva')}`);
console.log(`Posicao do Vagao 2: ${trem.indexof('Vagao 2')}`);
//console.table(trem.traversal());
