

//versão documentação mais simples://

//selecionar a classe dentro da classe container o h1
const h1 = document.querySelector('.container h1');
//chama função date
const date = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'

};
h1.innerHTML = date.toLocaleString('pt-Br', opcoes);
//ou//
//h1.innerHTML = date.toLocaleString('pt-Br', {dateStyle: 'full', timeStyle: 'short'});
//obs:com timeStyle:'full' aparece o horário completo com a marca  horário padrão de Brasilia