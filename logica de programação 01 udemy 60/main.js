//escrava uma função que recebe 2 números e retorne o maior deles
function max(x,y) {
    if (x > y ) {
        return x;
    }else {
        return y;
    }
    
}
console.log(max1(10,2));

/*se return x for execultado ele sai da função,caso contrario passa para o 
próximo código(return y),então não precisamos de else na função*/
function max(x,y) {
    if (x > y ) 
        return x;
    
        return y;
}
    
console.log(max1(10,2));

//condição tenária
function max2(x,y) {
    if (x > y ) 
        return x >y ? x:y;
}
console.log(max2(10,2));

//arrow function
const max3 = (x,y) => {
    return x >y ? x:y;
}

console.log(max3(10,2));

//arrow simplificado
const max4 = (x,y) => x > y ? x:y;

console.log(max4(10,2));