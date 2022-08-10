const elementos = [
  {tag: 'p' , texto: 'Frase 1'},
  {tag: 'div' , texto: 'Frase 2'},
  {tag: 'footer' , texto: 'Frase 3'},
  {tag: 'section' , texto: 'Frase 4'},
];
//seleciona o container
const container = document.querySelector('.container');

//cria o elemento div
const div = document.createElement('div');

//laço para percorrer o objeto container
for (let i =  0;i < elementos.length; i++) {
  //associação via desestruturação

  let { tag, texto} = elementos[i];

  //cria o elemento HTML para cada laço percorrido
  let tagCriada = document.createElement(tag); 

  //colocar o texto na tag 
  tagCriada.innerHTML = texto; //pode adicionar innertext
 
  /* //pode adcionar o node texto//
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  */

  //todas as tags criadas adciona o texto dentro DA DIV
  div.appendChild(tagCriada);

  //
}