function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//O Jus spesit tuos uzdavinius kur davet ana savaite namu darbam su (kibirais, troleibusais,stikline, grybais)? Nes jei gerai pamenu minejot, kad irgi isspresit juos.

//Map  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
/*const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2 */


//arejaus pvz, norim i areju ideti 3daiktus
//const arr = []; //sutrumpinimas
const arr = new Array();//ilgasis konstantos arejus

arr[0] = 'Dramblys';
arr[1] = 'Sluota';
arr[2] = 'Tankas';

console.log(arr);
console.log(arr, arr[2]);

const obj = {};
obj.animal = 'Dramblys';
obj.animal = 'Sluota';
obj.animal = 'Tankas';
console.log('objektas',obj);

//Map issaugo ta tvarka kuria jie buvo irasyti, paprastas objektas tos tvarkos neisaugo
const map = new Map(); 
map.set('animal', 'Dramblys');
map.set('house', 'Sluota');
map.set('war', 'Tankas');

console.log(map, map.size); //map.size matuoja mepo ilgi(kiek nariu yra)

map.forEach((element, i ) =>{
    console.log(i, '=>', element);
});

//kaip nuskaitom konkretu elimenta is mepo// su getu
console.log(map.get('war'));

let a;
map.set('u', a);
console.log(map.has('u'));//tikrinam ar 'u yra ir gausim triu arba folse priklauso ar jis yra ar nea

//
const f = () => console.log('Hi');
const f1 = () => console.log('Hi');
map.set('f', 'Tankas');
map.set('f1', 'Tankas');//negali buti vienodu raktu nes hausim null

//map yrasymas i localstoridza
console.log(JSON.parse(JSON.stringify([...map]))); //su ...sudestruktinam savybe, gausim masyva masyve

//pavertem i objekta
console.log(new Map(JSON.parse(JSON.stringify([...map]))));

/*5.(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti 
savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: 
idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti 
metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą 
(turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, 
tokiu atveju produktų kiekis turėtų sumuotis.+*/

class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        this.ideti(kiekis, 'surelis');
    }
    idetiPieno(kiekis) {
        this.ideti(kiekis, 'pienukas');
    }
    idetiDuonos(kiekis) {
        this.ideti(kiekis, 'duonele');
    }
    ideti(kiekis, produktas) {
        let suma;
        if (this.turinys.has(produktas)) {
            suma = this.turinys.get(produktas) + kiekis;
            this.turinys.set(produktas, suma);
        } else {
            this.turinys.set(produktas, kiekis);
        }
    }
    krepselioTurinys() {
        console.log(this.turinys);
    }

}

const K = new PirkiniuKrepselis();

K.idetiPieno(8);
K.idetiSureli(8);
K.idetiPieno(10);
K.idetiDuonos(10);

K.krepselioTurinys();

//set// manasus i masyva, turi tvarka kaip masyvas, ta tvarka negalima pasinaudoti(console.log(set[1]);)
//set naudingiausia savybe, setintos reiksmes gali buti unikalios- tai yra pridejus daug drambliu vis tiek jis spauzdins tik viena drambli o ne 10pvz

const set = new Set();
set.add('Dramblys');
set.add('Dramblys');
set.add('Dramblys');
set.add('Sluota');
set.add('Tankas');
set.add('Dramblys');
set.add({a:'Dramblys'});
set.add({a:'Dramblys'});
set.add({a:'Dramblys'});

console.log('set',set);

//prototype-egze jo nebus-darbe bus
//i jau sukurta clases tipa prideti klases metoda
//javascripte viskas yra objektai
//prototype labai pavojinga naudoti nes gali kitu koda sugadinti

const abc = 'Tankas';
const abc1 = 'Sluota';
//galim suprototaipint papildomas savybes prie tanko

console.log('ilgis:',abc.length);
console.log('tipas:',typeof abc);

String.prototype.bum = function(){ //prototype.bum patobulina ir prideda savybe Bum!
    return this.valueOf() + ' Bum!';
}
console.log('tipas moka saudyti',abc.bum());
console.log('tipas moka saudyti',abc1.bum());


//pvz
const ti = document.querySelector('#ti');
const ci = document.querySelector('#ci');
const b = document.querySelector('button');

Element.prototype.getVal = function(){
    if(this.hasAttribute('type') && this.getAttribute('type')  === 'checkbox' ){
        if(this.checked){
            return this.value;
        }
        return ''; //gausim :  Oki Doki
    } 
    return this.value;//gausim ka irasysim i laukeli ir Oki Doki is (html (value="Oki Doki"))
}

b.addEventListener('click', () => {
    console.log(ti.getVal(), ci.getVal());
})
/*
b.addEventListener('click', () => {
    console.log(ti.value(), ci.value());
})*/