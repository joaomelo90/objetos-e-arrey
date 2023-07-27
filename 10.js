//calculadora

const calculadora ={
soma: function (a,b){
return a + b;
},
subtrair:function (a,b){
    return a - b;
},
multiplicação:function (a,b){
    return a * b;
},
dividir:function (a,b){
    return a / b;
}
}

console.log(calculadora.soma(2,5));

console.log(calculadora.subtrair(2,5));

console.log(calculadora.multiplicação(2,5));

console.log(calculadora.dividir(2,5));