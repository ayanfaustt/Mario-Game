const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


document.addEventListener('keydown', ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);

});

const loop = setInterval(()=>{
    const position = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px',''); // o + converte a string em número

    if(position <= 120 && position > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${position}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src ='./assets/game-over.png ';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
},10);