//crie um arrey com 5 elementos e outro com menos
//faça uma função que verefique a quantidadde, se possuir menos que 5 imprima, pouco elemento,se tiver mais, muito elemento

let name = ["joao", "miguel","Kaity","gigi", "laila" ];

let num = [1,21,5];

function vereficaArrey(arr){

if(arr.length >= 5){
    console.log("muito elemento")
}
else{
    console.log("pouco elemento")
}}

vereficaArrey(name);
vereficaArrey(num);