const carro = {  //Objeto Carro que possui atributos e outros objetos
    modelo: 'A4',
    valor: 4000.00,
    proprietario: { //Objeto Proprietario dentro de carro.
        nome: 'Raul',//Atributos do objeto proprietario, que esta dentro do objeto Carro
        idade: 18,
        endereco: { // Atributo endereço que e um objeto que está dentro de proprietario
            logradouro: 'Av Sarah Veloso', // Atributos somente do objeto Endereço
            numero: 400
        }

    },
    condutores:[{ //Objeto que está dentro de carro que possui um array com valores difentres dentro dele.
        nome: 'Junior',
        idade: 19,

    },{
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function(){

    },

}



carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Teste'

console.log(carro);