console.log('llla');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeris = document.querySelector(`#skaicius`);
const spalva = document.querySelector(`#spalva`);
const button = document.querySelector('#naujas');
const istrinti = document.querySelector('#istrinti');

const balls = [];

function apskritimas(color, number){
    /*apskritimukas = {};
    apskritimukas.color = color ;
    apskritimukas.number = number;
    balls.push(apskritimukas);*/
}


button.addEventListener('click' , () =>{
    const apskritimukas = {};//
   // apskritimukas.color = color ;//
    apskritimukas.number = number;//
    balls.push(apskritimukas);//
    console.log(spalva.value);
    apskritimas(spalva.value, numeris.value);
    //
    let kodas2 = document.querySelector('#apskritimai');
    const div = document.createElement('div');//
    kodas2.appendChild(div);
    kodas2.innerHTML = document.createTextNode(numeris);
    const skaiciai = document.createTextNode(number);
    div.appendChild(skaiciai);
    //
    localStorage.setItem('Apskritimai1', JSON.stringify(balls));
    console.log(JSON.parse(localStorage.getItem('Apskritimai1')));
})
/*
let gameCounter = localStorage.getItem('gameSave');
if ( gameCounter === null){
    localStorage.getItem('gameSave', numeris);
    gameCounter = numeris;
}
const button = document.querySelector('#naujas');
const newBall = document.createElement('div');
const h1 = document.querySelector('h1');
button.addEventListener('click' , () =>{
    gameCounter++;
    h1.innerText = gameCounter;
    localStorage.setItem('gameSave', gameCounter )
})
*/

console.log(JSON.parse(localStorage.getItem('Apskritimai1')));
console.log('=====');

/*let gameCounter = localStorage.getItem('gameSave');
if ( gameCounter === null){
    localStorage.getItem('gameSave1', 0);
    gameCounter = 0;
}

const skaicius = document.querySelector('#skaicius');
const naujas = document.querySelector('#naujas');

skaicius.innerText = gameCounter;
naujas.addEventListener('click' , () =>{
    gameCounter++;
    skaicius.innerText = gameCounter;
    localStorage.setItem('gameSave1', gameCounter )
})
istrinti.style.backraundcolor = 'brown'
backraundcolor*/
/*for (let i = 0; i < 7; i++){
    const random = rand(1, 6);
    const obj = {}
    obj.namber = random;
    balls.push(obj);
}

console.log('3------',balls);*/