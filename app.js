

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (valueInUsd) => {
    let valueInYen = (valueInUsd / 1.07) * 156.5
    return valueInYen
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound = (Y) => {
    let pound = (Y / 156.5) * 0.87
    return pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


