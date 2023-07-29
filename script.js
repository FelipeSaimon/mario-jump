let mario = document.querySelector('.mario-running')
let fim = document.querySelector('.gameOverText')
let pontos = 0
document.addEventListener('keydown', () => {
    let pontuacao = document.querySelector('.pontuacao')
    
    mario.classList.add("pulo")
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500)

    pontos += 1
    console.log(pontos)
    pontuacao.innerHTML = `Pontos: ${pontos}` 
})


const run = setInterval(() => {

    let pipe = document.querySelector('.pipe')

    let posPipe = pipe.offsetLeft
    let posMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (posPipe <= 176 && posPipe > 0 && posMario < 200) {
        pipe.style.animation = 'none'
        pipe.style.left = `${posPipe}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${posMario}px`

        mario.src = './images/gameOver.png'
        mario.style.width = '130px'
        mario.style.marginLeft = '50px'

        fim.style.display = 'block'

        clearInterval(run)
    } 
}, 10)

function restart() {
    location.reload(run)
}
