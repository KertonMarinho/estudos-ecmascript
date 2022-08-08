
function meuEscopo () {
    //seleciona a tag do html 
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //função que recebe o evento do fromulário 
    function recebeEventoForm (evento) {
    //previne que o formulário envia
    evento.preventDefault();
    //seleciona o input que tá dentro do formulário (form)
    const nome = form.querySelector('.nome');
    const sobrenome  = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    //pega o valor  do objeto  mostre o resultado 
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
    //mostra o resultado 
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + 
    `${peso.value} ${altura.value}</p>`
    }
     //capturar o evento (submit) do formulário e execulta a função que recebe o evento
form.addEventListener('submit',recebeEventoForm);

}
meuEscopo();









