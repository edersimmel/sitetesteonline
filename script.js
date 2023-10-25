const convertButton = document.querySelector(".convertButton")

const currencyFronSelect = document.querySelector(".currency-select-value-from-convert")
const currencySelect = document.querySelector(".currency-select-value-to-convert")

// const currencyFrom = 
// const currencyTo = 

const dolarToday = 5
const euroToday = 5.5
const libraToday = 6.4
const bitcoinToday = 34.510
const realToday = 1

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currentValueFromConverted = document.querySelector(".currency-value-to-convert") //Valor DE convertido
    const currentValueConverted = document.querySelector(".currency-value") //Valor convertido

    if (currencyFronSelect.value == "dolar-from") {
        currentValueFromConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue )
    }
    if (currencyFronSelect.value == "euro-from") {
        currentValueFromConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue )
    }
    if (currencyFronSelect.value == "libra-from") {
        currentValueFromConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue )
    }
    if (currencyFronSelect.value == "bitcoin-from") {
        currentValueFromConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue )
    }
    if (currencyFronSelect.value == "real-from") {
        currentValueFromConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue )
    }

    // console.log(currencySelect.value)

    if (currencySelect.value == "dolar-to") {
        currentValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro-to") {
        currentValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra-to") {
        currentValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin-to") {
        currentValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "real-to") {
        currentValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


}
//CONVERTE MOEDA DE(IMAGEM E TEXTO):
function changeFromCurrency() {


    const currencyFromName = document.getElementById("currency-name-from")
    const currencyFromImage = document.querySelector(".currency-img-from")

    const currencyFronSelect = document.querySelector(".currency-select-value-from-convert")
    if (currencyFronSelect.value == "dolar-from") {
        currencyFromName.innerHTML = "Dólar Americano"
        currencyFromImage.src = "./assets/dollar.png"
    }
    if (currencyFronSelect.value == "euro-from") {
        currencyFromName.innerHTML = "Euro"
        currencyFromImage.src = "./assets/euro.png"
    }
    if (currencyFronSelect.value == "libra-from") {
        currencyFromName.innerHTML = "Libra"
        currencyFromImage.src = "./assets/libra.png"
    }
    if (currencyFronSelect.value == "bitcoin-from") {
        currencyFromName.innerHTML = "Bitcoin"
        currencyFromImage.src = "./assets/bitcoin.png"
    }
    if (currencyFronSelect.value == "real-from") {
        currencyFromName.innerHTML = "Real"
        currencyFromImage.src = "./assets/real.png"
    }
    convertValues()
}
currencyFronSelect.addEventListener("change", changeFromCurrency)


//CONVERTE MOEDA PARA(IMAGEM E TEXTO):
function changeCurrency() {


    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

   

    if (currencySelect.value == "dolar-to") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dollar.png"
    }
    if (currencySelect.value == "euro-to") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra-to") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin-to") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real-to") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)

