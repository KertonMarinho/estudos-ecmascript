
//selecionar a classe dentro da classe container o h1
const h1 = document.querySelector('.container h1');
//chama função date
const date = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    //condicional da dia da semana
    switch (diaSemana) {
    case 0: 
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1: 
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2: 
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3: 
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
    case 4: 
        diaSemanaTexto = 'Quinta-feira'; 
        return diaSemanaTexto;
    case 5: 
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
   case 6: 
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
 default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}
function getNomeMes(numeroMes){
    let nomeMes;
    //condicional da dia da semana
    switch (numeroMes) {
    case 0: 
        nomeMes = 'Janeiro';
        return nomeMes;
    case 1: 
        nomeMes = 'Fevereiro';
        return nomeMes;
    case 2: 
        nomeMes = 'Março';
        return nomeMes;
    case 3: 
        nomeMes = 'Abril';
        return nomeMes;
    case 4: 
        nomeMes = 'Maio';
        return nomeMes;
    case 5: 
        nomeMes = 'Junho';
        return nomeMes;
    case 6: 
        nomeMes = 'Julho';
        return nomeMes;
    case 7: 
        nomeMes = 'Agosto';
        return nomeMes;
    case 8: 
        nomeMes = 'Setembro';
        return nomeMes;
    case 9: 
        nomeMes = 'Outubro';
        return nomeMes;
    case 10: 
        nomeMes = 'novembro';
        return nomeMes;
    case 11: 
        nomeMes = 'Dezembro';
        return nomeMes;
    }
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
