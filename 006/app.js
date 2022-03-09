console.log('llla');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let suma = 0;
suma = 0.1 + 0.2; //gavom 0.30000004 nekreipiam i ta 4demesio
suma = suma + 5; //gausim normaliai 5.3

console.log(suma.toFixed(2)); //toFixed(2) gausim du skaicius po kablelio

console.log(suma.toPrecision(2)); //skaiciuoja isviso kiek reikia skaiciu (toPrecision(2))// geriau toFixed


//json komandos

//sukuriam objekta
const O = {bla : 'bla-bla'}
console.log(O);//gaunam objekta

const J = JSON.stringify(O); //is JS objekto verciam per JSON
console.log(J);//gaunam stringa
const OB = JSON.parse(J);
console.log(OB);//gaunam vel objekta


//inspect Application Local Store matom ka issaugom ten
//DEDAM I LENTYNAS
localStorage.setItem('Lentyna5', 78.55); //kur padedam ka padedam

localStorage.setItem('Mano lentyna', 88); //skaiciu nesugadina
localStorage.setItem('Mano lentyna2', JSON.stringify(77)); //liko stringas(keistas)
localStorage.setItem('Mano lentyna44', JSON.stringify(['blue', 'red', '75'])); //liko stringa

//skaiciu nesugadina o visa kita reik konvertuoti su JSON.stringify

//BANDOM PASIIMTI IS LENTYNU
//console.log(localStorage.getItem('Lentyna5'));
console.log(parseFloat(localStorage.getItem('Lentyna5')) + 2);

console.log(JSON.parse(localStorage.getItem('Mano lentyna2')));

console.log(JSON.parse(localStorage.getItem('Mano lentyna44')));

//bandom paimti is lentynos kurioje nieko nera
console.log(localStorage.getItem('blabla'));//gausim null consoleje
console.log(localStorage.getItem('blabla') === null); //gausim true consoleje

//sau
const namas1 = {}; //objektas zymimas {}, objektas zymi savybes.

namas1.kaminai = 2; //cia pazymim kad name yra 2kaminai
namas1.gyventojai = ['Vytas', 'Lina', 'Bebras'];//kokie zzmones cia gyvena
namas1.adresas = 'guobu g.13';//koks namo adresas
console.log(namas1);

//const K = JSON.stringify(namas1);
localStorage.setItem('Mano lentyna10', JSON.stringify(namas1));
console.log(JSON.parse(localStorage.getItem('Mano lentyna10')));


//destytojo
const zebrai = {
    z1: 'Masa',
    z2: 'grysa'
};

localStorage.setItem('Mano zebrai', JSON.stringify(zebrai));//matom application
console.log(JSON.parse(localStorage.getItem('Mano zebrai')));//matom consoleje

//pvz kam taip dedam buuton
let gameCounter = localStorage.getItem('gameSave');
if ( gameCounter === null){
    localStorage.getItem('gameSave', 0);
    gameCounter = 0;
}



//let counter = 0;
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

h1.innerText = gameCounter;

//h1.innerText = counter;
button.addEventListener('click' , () =>{
    gameCounter++;
    h1.innerText = gameCounter;
    localStorage.setItem('gameSave', gameCounter )
})

//keisis skaiciukai
//dabar padarom kad isiseivintu ta info


//uzduotis
//Sukurti masyvą iš 33 elementų, kurie yra random skaičiai nuo 1 iki 33. Masyvą įrašyti į localStorage DONE!

const masyvas = [];
for (let i = 0; i < 33; i++){
    const random = rand(1, 33);
    const obj = {}
    obj.namber = random;
    masyvas.push(obj)
}


console.log(masyvas);

localStorage.setItem('Mano lentyna100', JSON.stringify(masyvas));

//destytojo
const arr33 = [];

for (let i = 0; i < 33; i++){
    arr33.push(rand(1, 33));

}

console.log(arr33);

localStorage.setItem('Mano lentyna101', JSON.stringify(arr33));
