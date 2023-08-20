// let temps = {
//     celsius: [25,77],
//     far: [77, 100],
// }

// function con(){
// const cf = temps.celsius 
// const fc = temps.far

// const totalcf = cf * 9 / 5 + 32
// const totalfc = (fc - 32) * 5 / 9

// console.log(totalcf)
// console.log(totalfc)

// }

// con()


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    let updateDegree = Number(degree.toUpperCase().replace("F",""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists){
    updateDegree = Number(degree.toUpperCase().replace("C",""))
    formula = (celsius) => celsius * 9 / 5 + 32
    degreeSign = 'F'

    }
    
    return formula(updateDegree) + degreeSign
}

    try{
        console.log(transformDegree('50C'))
        console.log(transformDegree('50F'))
        console.log(transformDegree('50o'))
    } catch (error){
        console.log(error.message)
    }

    





    // function calculeteTotal() {
    //     const receitaTotal = sum(lucro.receita)
    //     const despesaTotal = sum(lucro.despesa)

    //     const total = receitaTotal - despesaTotal

    //     const deBoa = total >=0

    //     let message = "negativo"

    //     if (deBoa) {
    //         message = "positivo"

    //     }
        
    // console.log(`Seu saldo é ${message}: ${total}`)


    // }

    // calculeteTotal()