//Cadeia de protipos (prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
//Definindo heraça de objetos atraves do __proto__

console.log(filho.__proto__)
console.log(filho.attr1)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing
}


const Volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()} ` //Super para referenciar o metodo da minha herança
    }
}

//Função do Object para fazer relação de herança de objetos
//1 parametro objeto que vai receber herança, segundo o que vai ser herdado.
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(Volvo, carro)
console.log(ferrari)
console.log(Volvo)


Volvo.status(100)
console.log(Volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())