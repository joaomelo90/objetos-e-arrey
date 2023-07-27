//adicione janelas e deleta portas

let bus = {
    rodas:8,
    limite : 40,
    portas: 2 ,
}

delete bus.portas;

console.log(bus.portas)

bus.janelas = 20

console.log(bus);
console.log(bus.janelas);