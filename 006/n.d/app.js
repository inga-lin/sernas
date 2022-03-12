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

console.log(JSON.parse(localStorage.getItem('Apskritimai1')));
console.log('=====');