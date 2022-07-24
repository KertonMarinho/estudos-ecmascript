const elementos = [
    {tag: 'p',texto: 'qualquer texto'},
    {tag:'div',texto:'frase  2'},
    {tag:'section',texto:'frase 3'},
    {tag:'footer',texto:'frase 4'},
];
//seleciona o elemento do html classe .container
const container = document.querySelector('.container');//classe.container
//cria elemento  no h1
const div = document.createElement('div');
//percorrer(interar) o elemento com for
for(let i = 0; i< elementos.length; i++){
    //desestruturação do object:
    let {tag, texto } = elementos[i];
    //cada um dos elementos vou criar um elemento
    let tagCriada = document.createElement(tag);
    //adiciona texto na tag criada para
    tagCriada.innerHTML = texto;//pode mudar,ser mais seguro,inerhtml por inertext
    //adicionar o elemento em uma tag
    div.appendChild(tagCriada);
}
container.appendChild(div);