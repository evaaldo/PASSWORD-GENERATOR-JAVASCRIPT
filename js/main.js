const passInput = document.getElementById('generator__text')
const lenInput = document.getElementById('generator__range')
const infoLength = document.querySelector('label[for="labelLengthId"]')
const btnGerar = document.getElementById('checkbox__botao')

const chkLower = document.getElementById('generator__lowercase')
const chkUpper = document.getElementById('generator__upercase')
const chkNumber = document.getElementById('generator__number')
const chkSymbol = document.getElementById('generator__symbol')

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['!', '@', '#', '$', '%']

const caracters = Array.from(Array(26)).map((_, i) => i + 97)
const lowercaseCaracters = caracters.map((item) => String.fromCharCode(item))
const uppercaseCaracters = lowercaseCaracters.map((item) => item.toUpperCase())

infoLength.innerHTML = lenInput.value

lenInput.addEventListener('change', () => {

    infoLength.innerHTML = lenInput.value

})

btnGerar.addEventListener('click', () => {

    generatePassword(
        chkLower.checked,
        chkUpper.checked,
        chkNumber.checked,
        chkSymbol.checked,
        lenInput.value
    )

})
