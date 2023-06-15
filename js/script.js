const start = document.querySelector('.startGame')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restart = document.querySelector('.botao');



const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)

};

const loop =setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition <= 120 && pipePosition > 0 &&  marioPositon < 80) {

        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPositon}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.left = '50px';

        
        clearInterval(loop);
       
        
}

}, 10)

document.addEventListener('keydown', jump)