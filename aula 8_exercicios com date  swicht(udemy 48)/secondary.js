
//selecionar a classe dentro da classe container o h1
const h1 = document.querySelector('.container h1');
//chama função date
const date = new Date();

function getDiaSemanaTexto(diaSemana){
    const diaSemana = ['domingo','segunda','terça','quarta','quinta','sexta','sabado'];
    return diaSemana[diaSemana]
}
function getNomeMes(numeroMes){
  const meses = [ 'janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro', 
'novembro','dezembro'];
return meses[numeroMes];
}
//função que corrige o zero a esquerda da hora
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
//função que forma data
function criaDate(date) {
    const diaSemana = date.getDay();
    const numeroMes = date.getMonth();

    const nomeDia =  getDiaSemanaTexto(diaSemana, );
    const nomeMes = getNomeMes(numeroMes);
    return (
        `${nomeDia}, ${date.getDate()}  de ${nomeMes}` + 
    ` de ${date.getFullYear()}` + 
    ` ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
        );
}

//coloca a data na tag h1
h1.innerHTML = criaDate(date);
 