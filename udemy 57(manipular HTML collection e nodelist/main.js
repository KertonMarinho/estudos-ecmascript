const paragrafos = document.querySelector('.paragrafos'); //obs.apesar p não ser um array ele se comprta como array
const ps = paragrafos.querySelectorAll('p');

//pegar todos os estilos computados no Html
const estilosBody = getComputedStyle(document.body); //getComputer funçao do navegar

//selecionar qual estilo computador quero utilizar
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody);


for(let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#FFFFFF';
    
   
};
