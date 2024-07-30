const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert",) //valor em real
    const CurrencyValueConverted = document.querySelector(".currency-value") //outras moedas




    const dolarToday = 5.60

    const euroToday = 6.10

    const pesoToday = 0.0061

    const libraToday = 7.22
    
    const wonsToday = 0.0040




    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }



    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "wons") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW",
        }).format(inputCurrencyValue / wonsToday)
    }

    if (currencySelect.value == "peso") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / pesoToday)

        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
    }


    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/peso.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "wons") {
        currencyName.innerHTML = "Wons"
        currencyImage.src = "./assets/wons.png"
    }

    convertValues()

}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)