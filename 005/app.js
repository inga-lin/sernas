console.log('masyvas');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//objektinis programavimas
const namas1 = {}; //objektas zymimas {}, objektas zymi savybes.

namas1.kaminai = 2; //cia pazymim kad name yra 2kaminai
namas1.gyventojai = ['Vytas', 'Lina', 'Bebras'];//kokie zzmones cia gyvena
namas1.adresas = 'guobu g.13';//koks namo adresas

//2budas kaip aprasyti namas2
const namas2 = {
    kaminai: 5,
    gyventojai: ['Simas', 'Rimas'],
    adresas: 'guobu g.13A'
}
console.log(namas1, namas2);//atspauzdis vidinius namas1. dalykus pagal abc
console.log(namas1.kaminai);

/*const namas1 = {}; //objektas

namas1.kaminai = 2;

namas1.gyventojai = ['Vytas', 'Lina', 'Bebras'];

namas1.adresas = 'Guobų g. 13';*/
//2uzduotis.atspauzdint visus namo gyventojus
for (let i = 0; i < namas1.gyventojai.length; i++){
    console.log(namas1.gyventojai[i]);
}

//2variantas
namas1.gyventojai.forEach(element => {
    console.log(element);
});

namas1.gyventojai.forEach(element => console.log('3variantas ',element));

//3uzduotis.Reikia sukurti masyvą iš 7 elementų.
// Masyvo elementas yra objektas. 
//Tas objektas turi savybę number kuri yra 
//atsitiktinis skaičius nuo 1 iki 6 DONE!

//destytojo
const arr = [];
for (let i = 0; i < 7; i++){
    const random = rand(1, 6);
    const obj = {}
    obj.namber = random;
    arr.push(obj);
}

console.log('3------',arr);

//4uzdavinys Reikia sukurti masyvą iš 7 elementų. 
//Masyvo elementas yra objektas. 
//Tas objektas turi savybę numbers kuri yra masyvas
// iš 5 atsitiktinių skaičių nuo 1 iki 6 DONE!

const arr1 = [];
for (let i = 0; i < 7; i++){
    const masyvas = [];
    for (let k = 0; k < 5; k++){
        const random = rand(1, 6);
        masyvas.push(random)
    }   
    const obj = {};
    obj.numbers = masyvas;
    arr1.push(obj);
        
    

}

console.log(arr1);
console.log('-------');
//4uzduotis Parašyti kodą, kuris gražina random katino 
//vardą DONE!
const cats = ['Murka', 'Juodis', 'Kakalius', 'Meilutė', 'Pifas'];

console.log(cats[rand(0, cats.length - 1)]);

//5uzdavinys Reikia sukurti cat objektą.
// Objektas turi turėti dvi savybes. 
//name ir pills. Name yra random iš cats masyvo.
// Pills yra objektas. Pills objektas turi dvi savybes 
//blue ir red. Tų savybių reikšmės yra rand true arba 
//false DONE!

//gamina catino oblekta
const cat = {};
cat.name = cats[rand(0, cats.length - 1)];
cat.pills = {};
cat.pills.blue = !rand(0,1);
cat.pills.red = !rand(0,1);

console.log(cat);

const ft = !rand(0, 1);// is jo gausim true arba folse
console.log(ft);

//6uzduotis Padaryti masyvą su 20 tokių katinų DONE!

console.log('-----');
const vetClinic = [];
for (let i = 0; i < 20; i++ ){
    const cat = {};
    cat.name = cats[rand(0, cats.length - 1)];
    cat.pills = {};// cia sukuriam 20katinu
    cat.pills.blue = !rand(0,1);
    cat.pills.red = !rand(0,1);
    vetClinic.push(cat);
}
console.log(vetClinic);

//kiek klinikoje yra murku

let murka = 0;
for (let i = 0; i < cat.name.length; i++ ){
    if (cat.name === 'Murka'){
        murka++
    }
}

let murka1 = 0;
//
vetClinic.forEach(cat => murka1 =  cat.name === 'Murka' ? murka1 + 1 : murka1);

console.log(vetClinic);
console.log(murka1);


//N.D
console.log('n.d---------');
const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];
/*1.Sukurti 100 sąskaitų masyvą.

Kiekviena sąskaita yra objektas ir turi po 5 savybes:
number: pagal taisykle INV001, INV002, … INV099, INV100;

products: masyvas random ilgio nuo 1 iki 10;
products masyvo elementai objektai, turintys po 4 savybes:
title: random iš products masyvo (vienoje sąskaitoje gali
 būti keli vienodi produktai. Vistiek jų kainos bus skirtingos); 
price: random skaičius su kableliu nuo 1.00 iki 100.00; 
amount: random skaičius nuo 1 iki 20;
total:  price ir amount sandauga.

total: visų products masyvo elementų total suma
vat: 21% nuo total
grandTotal: vat ir total suma*/
/*
const saskaituMasyvas = [];
for (let i = 0; i < 100; i++){
    const products1 = [];
    for (let k = 0; k < 4; i++){
        const random = rand(1, 10);
        products1.push(random)
    }
    const products = {};
    products.title = 
}*/

//console.log(saskaituMasyvas);
/*const saskaitos = [];
for (let i = 0; i < 100; i++){
    const masyvas = [];
   for (let i = 0; i < 5; i++){
       

   }
    number.push(i);
    const obje = {};
    
}


console.log(saskaitos);
const saskaita = {};
saskaita.number = number.length */
const saskaita = {};
saskaita.number = 10;
saskaita.products = {};
saskaita.products.title = saskaita[rand(0, products.length)];