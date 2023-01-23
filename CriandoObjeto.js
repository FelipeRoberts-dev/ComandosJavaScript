//Crição Literal com {}
const obj1 = {


} 

// Criação com Object 
console.log(typeof Object, typeof new Object)
const obj2 = new Object


// Funções Construtora 

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }

    
}

const t1 = new Produto('Canete', 7.99, 0.15)
console.log(t1)

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook',2999.99, 0.25)

console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())



//Função Construtora
function criarFuncionario(nome, salarioBase, faltas){

    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980,4)
const f2 = criarFuncionario('Maria', 11400,1)

console.log(f1.getSalario(), f2.getSalario())




//Criando objeto atraves do Object.
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função para que retornar um objeto. Transformando um JSON (Que e um texto) em um objeto.
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)

