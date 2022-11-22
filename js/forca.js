const chkU = document.getElementById('generator__upercase')
const chkL = document.getElementById('generator__lowercase')
const chkN = document.getElementById('generator__number')
const chkS = document.getElementById('generator__symbol')

const forca = document.querySelector('.medidor__texto')
const barra = document.querySelector('.barra')

const lista = [chkU, chkL, chkN, chkS]
let count = 0
let valorFinal

function verificaChecked() {

    lista.forEach((el) => {
        if(el.checked == true) {
            count++
        }

        let valorFinal = count
        
        alteraForca(valorFinal)

    })
    
    count = 0

}

function alteraForca(valorFinal) {

    if(valorFinal == 1) {
        forca.innerHTML = 'FÁCIL'
    }
    if(valorFinal == 2) {
        forca.innerHTML = 'MÉDIO'
    }
    if(valorFinal == 3) {
        forca.innerHTML = 'FORTE'
    }
    if(valorFinal == 4) {
        forca.innerHTML = 'MUITO FORTE'
    }
    if(valorFinal == 0) {
        forca.innerHTML = 'INDEFINIDO'
    }

}


