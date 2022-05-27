const redesociais = ['Instagram',
'Facebook',
'Twitter',
'LinkedIn',
'Youtube',
];

for (let i = 0; i < redesociais.length; i++){
  console.log(redesociais[i]);
}

for(const i in redesociais){
  console.log(`${i}: ${redesociais[i]}`);
}

for (const valor of redesociais){
  console.log(valor);
}

redesociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
});
