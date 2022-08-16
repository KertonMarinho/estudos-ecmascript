/* Escreva uma função chamada ePaisagem que recebe dois argumentos,
 largura e altura de um imagem (number).
 Retorne true se a imagem estiver no modo paisagem. */
 function ePaisagem(largura, altura) {
    //return largura >= altura ? true : false;
    return largura > altura; //se largura for mmaior altura retorna  true.
 }
 console.log(ePaisagem(1080,1920));

//arrow function
const ePaisagem1 = (largura, altura) => largura > altura;

console.log(ePaisagem1(1080,1920));