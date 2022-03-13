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
const apskritimai = document.querySelector('#apskritimai');
const balls = [];

button.addEventListener('click' , () =>{
   const obj = {};
   const color = spalva.value;
   obj.color = color;
   const number = numeris.value;
   obj.number = number;
   balls.push(obj);

   const naujas = document.createElement("div");
   const naujas1 = document.createTextNode(number);
   naujas.style.backgroundColor = color;
   naujas.appendChild(naujas1);
   apskritimai.appendChild(naujas); //apskritimuose sukuriam
   // vis nauja div su numeriu ir spalva


    
    //
    localStorage.setItem('Apskritimai1', JSON.stringify(balls));
    //console.log(JSON.parse(localStorage.getItem('Apskritimai1')));
})

console.log(JSON.parse(localStorage.getItem('Apskritimai1')));
console.log('=====');

