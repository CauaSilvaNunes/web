É case-sensitive (Diferencia maiúsculas de minúsculas)
Aceita cadeia de carcteres unicode(com acentuações)
//Comentário

# Tipos de dados
-Primitive(string, number, boolean, undefined)
-Structural(Object, function)
-Structural Primitive

    *typeof- verifica o tipo de dado

    # String
    sequência de caracteres entre aspas
        ``- Permite o uso de multilinhas e operações
        console.log(`Cauã ${3 * 2}`)
    
    # Object 
    Aquilo q tem atributo e ou função
    console.log({
    nome: 'Caua',
    idade: 18,
    andar: function() {
            console.log
            } })
    
    # Array
    Agrupamento de dados
    const animals = [
        'Anr',
        'Turtle',
    ]
    console.log(animals[0'])

# Variáveis
-Nomes simbólicos para receber algum valor
-Identificadores
-Pode ser (
    

    var -
     Global e local,Ele pode ter o seu valor reatribuido
        var clima = "Quente"
        clima="Frio"
        console.log("O clima aqui é" clima)

    let-
     Local,Ele pode ter o seu valor reatribuido
        let age , IsHuman
        age = 18
        IsHuman = true
        console.log(`O ${name} tem ${age} anos`)

    const -
     Local, Ela não varia
        const animal = {
            name: "Billy",
            age: 12,
            Weight: "10kg",
            isAdmin: true

        }

        console.log(animal.Weight, animal)
        )
        {
    var weight, pessoa;

        console.log(typeof weight)

        var pessoa = {
            name: "Cauã N.",
            age: 18,
            IsSubscribed: true,
            weight: "9kg"

        }

        console.log(`${pessoa.name} de idade ${pessoa.age} pesa ${pessoa.weight}`)

# Functions
    Parameter-
     Nome para variável(oq vêm entre parenteses na função )
        
    Arguments-
     Valor  do parâmetro

    Declaration- 
        function createPhrases() {
        console.log('Bem vindo ao Starter!!')
        console.log('Revi~sao é a mão do aprendizado')
    
    Run-
        createPhrases()
    
    Expression - 
        const sum = 
        function (number1, number2) {
        console.log(number1 * number2)
        }

        sum(2, 3)
        }
    
    Return-
     Joga os argumentos para fora do escopo
    const sum = function (number1, number2) {
        total = number1 * number2
        return total
    
        }
        let number1 = 3
        let number2 = 4


            console.log(`o numero 1 é ${number1}`)
            console.log(`o numero 2 é ${number2}`)
            console.log(`a multiplicação é ${number1 * number2}`)
    
    Hoisting-
     Fenomeno no qual uma função declara "sobe"

    Arrow function-
     Uma função curta
        const sum = (number1, number2) => {
            console.log('Cauã')

    Callback -
     é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação
        function sayMyName(name) {
          console.log('antes de executar a função callback')
          name()
          console.log('depois de executar')
        }
        sayMyName(
          () => {
             console.log('estou em uma callback')
          }
        )
    
    Function constructor-
     Utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

        function Person(name) {
	        this.name = name
	        this.walk() = function() {
	        	return this.name + "está andando")
	        }
        }
        const mayk = new Person("Mayk")
        const joao = new Person("João")
    
# Manipulando dados
    
    Prototype-
        mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

    Type conversion-
        se trata de uma conversão de tipo feita pelo dev explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number()
        console.log(Number('9' + 5))

    Contando- 
        letras 
            let word = "house"
                console.log(word.length)

        digitos
            let number = 123456
                console.log(String(number).length)

        Elementos de uma array
            console.log(['a','b','c'].length)

    Trocando- 
        ponto por virgula
            let number = 123.456
                console.log(number.toFixed(3).replace(".",","))
          
        maiúscula em minúscula
            let word = "casa doida"
          console.log(word.toUpperCase())

        minuscula em maiúscula
            console.log(word.toLowerCase())
    
    Manipulando Strings e arrays-
        Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. 
        Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

            let phrase = "Um dois três"
            let myArray = phrase.split(" ")
                console.log(myArray)
            let phraseWithUnderscore = myArray.join("_")
                console.log(phraseWithUnderscore)

    Encontrando palavras-
        let phrase = "Um dois três"
            console.log(phrase.includes(" "))

    Array com constructor-
        let myArray = new Array ('a','b','c')
            console.log(myArray)

    Cadeia em array-
        let word = "casacasa"
            console.log (Array.from(word))

    let techs = ["html","css","js"]

    adicionar item no fim
        console.log(techs.push("node.js"))

    adicionar item no começo
        console.log(techs.unshift("sql"))

    remover do fim
        techs.pop()

    remover do começo
        techs.shift()

    pegar apenas alguns elementos do array
        console.log(techs.slice(1,3))

    remover 1 ou mais items em qualquer posição do array
        console.log(techs)
        console.log(techs.splice(2, 3))

    encontrar a posição de um elemento no array
        let position = techs.indexOf("node.js")
        console.log(position)

# Expressions and operators

    New-cria um tipo de objetos
        let date = new Date('2022-12-06')
            console.log(date.__proto__)

    Operadores aritméticos-
        Resto da divisão: sinal % 
            let remainder
            remainder = 11 % 9
            console.log(remainder)//2

        Incremento: sinal ++ 
            let increment = 0
            console.log(++increment)
            console.log(increment)

        Decremento: sinal -- 
            let decrement = 0
            decrement--
            console.log(decrement)

        Exponencial: sinal ** 
            console.log(2 ** 3)
    
    Operadores de comparação-
        Igual- sinal ==
            let one = 1
            let two = 2
            console.log(one == two)//false

        Diferente de- sinal !=
            let one = 1
            let two = 2
            console.log(one == two)//true

        Estritamente igual- ===
            let one = 1
            let um = "1"
            console.log(one == two)//false

        Estritamente diferente- !==
            let two = 2
            let dois = "2"
            console.log(two == dois)//false

        Maior que(>), Menor que(<), Menor ou igual(<=)e Maior ou igual(>=) 

    Operadores lógico-
        And- &&, two to be truth
            let pao = true
            let queijo = false
            console.log(pao && queijo)//false

        Or- ||, one to be both
            let pao = true
            let queijo = false
            console.log(pao || queijo)//true

        Not- !
            let pao = true
            let queijo = false
            console.log(!pao)//false
            console.log(!queijo)//true

    Operadores condicionais
        condição ? valor1 : valor2 
            let pao = false
            let queijo = false
            const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
            console.log(niceBreakfast)
    
    Precedência de operadores
        // De cima para baixo, do mais importante ao menos importante.
        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            + -
        * relacional                    < <= > >=
        * igualdade                     == != === !==
        * AND                           && 
        * OR                            ||
        * condicional                   ?:
        * assignment (atribuição)       = += -= *= %= 

# Controle de fluxo
    If and else-
        let age = 21

        if( age >= 16 && age <= 20){
            console.log('You can drive')
        } else if( age >= 21){
            console.log('You can drive and drink')
        } else {
            console.log('You can not do anythink')
        }

    Switch-
        switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
        }

        return result
        }

        console.log(calculate(4, '%', 8))

    Throw-
        function sayMyName(name = '') {
            if (name === '') {
                throw 'Nome é obrigatório'
            }

            console.log(name)
        }
            try {
            sayMyName()
        } catch(e) {
            console.log(e)
        }

        console.log('após ao try/catch')

# Estruturas de repetição
    For- varável; condição; expressão final.
    Pode usar o break(para a execução) e o continue(pula execução)
        for(let i = 10; i > 0; i--){
            if(i === 6){
                continue;
        }

            console.log(i)
        }

    While- Um "for" usado quando quando não se sabe o momento de parada
        let i = 0;
        while(i < 10){
            console.log(i)
            i++
        }
    
    For of - 
        let name = 'Cauã'
        let names = ['Cauã1','Cauã2','Cauã3']

        for(let name of names) {
            console.log(name)//nome por nome
        }
        for(let char of name) {
            console.log(char)//letra por letra
        }

    For in-
        let person = {
            name: 'Cauã',
            age: 20,
            weight:90.8

        }

        for(let property in person){
            console.log(property)
            console.log(person[property])
        }
    
# Exercicios

Notas escolares-
    let score = 90

        function getScore(score) {
            if( score >= 90 ){
                console.log('A')
            } else if( score >= 80 && score < 90){
                console.log('B')
            } else if( score >= 70 && score < 80){
                console.log('C')
            } else if( score >= 60 && score < 70){
                console.log('B')
            } else if( score < 60 && score >= 0){ 
                console.log('F')
            } else {
        console.log('Nota inválida')
            }

            return score
        }


        getScore(8)

Fluxo de caixa familiar-

    let lucro ={
    receita: [80,90],
    despesa: [90,30], 
    }
    function sum(array){
        let total = 0;

        for(let value of array){
            total += value
        }

        return total
    }

    function calculeteTotal() {
        const receitaTotal = sum(lucro.receita)
        const despesaTotal = sum(lucro.despesa)

        const total = receitaTotal - despesaTotal

        const deBoa = total >=0

        let message = "negativo"

        if (deBoa) {
            message = "positivo"

        }
        
    console.log(`Seu saldo é ${message}: ${total}`)


    }

    calculeteTotal()


        

    


    
