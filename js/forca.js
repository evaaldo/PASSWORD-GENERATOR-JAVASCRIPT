const chkU = document.getElementById('generator__upercase')
const chkL = document.getElementById('generator__lowercase')
const chkN = document.getElementById('generator__number')
const chkS = document.getElementById('generator__symbol')

const forca = document.querySelector('.medidor__texto')
const b1 = document.getElementById('barra-1')
const b2 = document.getElementById('barra-2')
const b3 = document.getElementById('barra-3')
const b4 = document.getElementById('barra-4')

const listaBarras = [b1, b2, b3, b4]
const listaChk = [chkU, chkL, chkN, chkS]
let count = 0
let valorFinal

function verificaChecked() {

    listaChk.forEach((el) => {
        if(el.checked == true) {
            count++
        }

        let valorFinal = count
        
        alteraForca(valorFinal)
        alteraCor(valorFinal)

    })
    
    count = 0

}

function alteraCor(valorFinal) {

    listaBarras.forEach((el) => {

        if(valorFinal == 1) {
            el.style.background = 'var(--verde-escuro)'
        }
        if(valorFinal == 2) {
            el.style.background = 'var(--laranja)'
        }
        if(valorFinal == 3) {
            el.style.background = 'var(--vermelho)'
        }
        if(valorFinal == 4) {
            el.style.background = 'var(--vermelho-muito-escuro)'
        }
        if(valorFinal == 0) {
            el.style.background = 'var(--cinza)'
        }
    })

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


