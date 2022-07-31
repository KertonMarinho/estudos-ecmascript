function aleatorio (min, max) {
    const num = math.random()* (max - min) + min;
    return parseint(r.tofixed());
}
let tentativas = [];
let contador = 1;
let num;
let check = 2;
const min = 1;
const max = 5;

for (let i = 0; i <= 50 ; i++) {
    do {
        if (num  === check) tentativas.push(contador);
         //console.log(` numero ${num} na tentativa ${contador} `);
      contador ++; 

    } while (num !== check);

    contador = 0; //zerar o codigo
}
console.log(tentativa);
