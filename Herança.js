
//Criação de objetos literal, quando criado apontam para OBJECT.
const Ferrari = {
    model: 'F40',
    velmax: 324
}

const Volvo = {
    modelo: 'v40',
    velmax: 200
}

console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)


function MeuObjeto(){
    
}

console.log(typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
