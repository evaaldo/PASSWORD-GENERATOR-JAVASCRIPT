const passInput = document.getElementById('generator__text')
const lenInput = document.getElementById('generator__range')
const infoLength = document.querySelector('label[for="labelLengthId"]')
const btnGerar = document.getElementById('checkbox__botao')
const btnApagar = document.getElementById('checkbox__botao-vermelho')
const btnCopiar = document.getElementById('copiar')

const chkLower = document.getElementById('generator__lowercase')
const chkUpper = document.getElementById('generator__upercase')
const chkNumber = document.getElementById('generator__number')
const chkSymbol = document.getElementById('generator__symbol')

const copiedText = document.getElementById('copied')

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

const generatePassword = (

    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols,
    Length

) => {

    const newArray = [

        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasUppercase ? uppercaseCaracters : []),
        ...(hasLowercase ? lowercaseCaracters : [])

    ]

    if(newArray.length === 0) return

    let password = ''

    for(let i = 0; i < Length; i++) {

        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]

    }

    passInput.value = password

}

btnApagar.addEventListener('click', () => {

    passInput.value = ''
    copiedText.style.visibility = 'hidden'

})

btnCopiar.addEventListener('click', () => {

    passInput.select()
    document.execCommand('copy')
    copiedText.style.visibility = 'visible'

})

