// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const body = document.querySelector('body');

// startBtn.addEventListener('click', onStart);
// stopBtn.addEventListener('click', onStop);

// const idInt = setInterval((onStart) => {
//     body.style.backgroundColor = getRandomHexColor()
//     startBtn.disabled = true;} , 1000)

// // function onStop() {

// // }

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStart)
let idInterval = null;
stopBtn.disabled = true;

function onStart() {
    body.style.backgroundColor = getRandomHexColor()
    idInterval = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000);
    startBtn.toggleAttribute('disabled')
    stopBtn.toggleAttribute('disabled')
}

stopBtn.addEventListener('click', onStop)

function onStop() {
    startBtn.toggleAttribute('disabled')
    stopBtn.toggleAttribute('disabled')
    clearInterval(idInterval)
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


