console.log('llla');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const masyvas1 = [];
for (let i = 0; i < 30; i++){
    masyvas1.push(rand(5, 25));
}

console.log('1)masyvas1', masyvas1);

//2.Naudodamiesi 1 uždavinio masyvu:
//a.Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let didesniUz10 = 0;
for (let i = 0; i < masyvas1.length; i++ ){
    if (masyvas1[i] > 10){
        didesniUz10++ ;
    }
}

console.log('2)a.kiek masyve yra reikšmių didesnių už 10:', didesniUz10);

//b.Raskite didžiausią masyvo reikšmę ir jos indeksą;
let didziausiaMasyvoReiksme = 0;
let didziausiosReiksmesIndeksas = 0;

for (let i = 0; i < masyvas1.length; i++ ){
    if (masyvas1[i] > didziausiaMasyvoReiksme){
        didziausiaMasyvoReiksme = masyvas1[i];
        didziausiosReiksmesIndeksas = i;
    }
}
console.log('b.didžiausia masyvo reikšme:', didziausiaMasyvoReiksme);
console.log('b.jos indeksas', didziausiosReiksmesIndeksas);

//c.Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let poriniuIndeksuReiksme = [];
for (let i = 0; i < masyvas1.length; i++){
    if (i % 2 === 0){
        poriniuIndeksuReiksme.push(masyvas1[i])
    }
}

let poriniuIndeksuReiksmiuSuma = 0;
for (let i = 0; i < poriniuIndeksuReiksme.length; i++){
    poriniuIndeksuReiksmiuSuma = poriniuIndeksuReiksmiuSuma + poriniuIndeksuReiksme[i];
}
console.log('c.poriniu Indeksu skaiciai ', poriniuIndeksuReiksme );
console.log('c.poriniu Indeksu Reiksmiu Suma',poriniuIndeksuReiksmiuSuma);
//d.Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes
// minus tos reikšmės indeksas;

const naujasMasyvas1 = [];
for (let i = 0; i < masyvas1.length; i++){
    naujasMasyvas1.push(masyvas1[i] - i);
}


console.log('d.naujas Masyvas',naujasMasyvas1);


//e.Papildykite masyvą papildomais 10 elementų su reikšmėmis 
//nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

const skaicius40 = 40 -  masyvas1.length;
for ( let i = 0; i < skaicius40; i++){
    masyvas1.push(rand(5, 25));
}
console.log(skaicius40);
console.log(masyvas1);
//f.Iš masyvo elementų sukurkite du naujus masyvus. 
//Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
//o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
const masyvasPorinis = [];
const masyvasNeporinis = [];

for ( let i = 0; i < masyvas1.length; i++){
    if (i % 2 === 0){
        masyvasPorinis.push(masyvas1[i])
    } else {
        masyvasNeporinis.push(masyvas1[i])
    }

}
console.log(masyvasPorinis);
console.log(masyvasNeporinis);
//g. masyvo elementus su poriniais indeksais padarykite
// lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < masyvas1.length; i++){
    if (i % 2 === 0 && masyvas1[i] > 15){
        masyvas1[i] = 0;
    }
}

console.log(masyvas1);
//h.Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10.
let maziausiasIndeksas = 0;
for (let i = 0; i < masyvas1.length; i++){
    if (masyvas1[i] > 10){
        maziausiasIndeksas = i;
        break;
    
    }
}

console.log(maziausiasIndeksas);
console.log('----------');

//3.Sugeneruokite masyvą, kurio reikšmės atsitiktinės
// raidės A, B, C ir D, o ilgis 200. 
//Suskaičiuokite kiek yra kiekvienos raidės.
const raides = ['a', 'b', 'c', 'd'];
const raidziuMasyvas = [];
for (let i = 0; i < 200; i++ ){
    raidziuMasyvas.push(raides[rand(0, raides.length - 1)]);
}

console.log(raidziuMasyvas);

let a = 0;
let b = 0;
let c = 0;
let d = 0;

for (let i = 0; i < raidziuMasyvas.length; i++){
    if ( raidziuMasyvas[i] === 'a'){
        a++
    } 
    if ( raidziuMasyvas[i] === 'b'){
        b++
    }
    if ( raidziuMasyvas[i] === 'c'){
        c++
    }
    if ( raidziuMasyvas[i] === 'd'){
        d++
    }
}

console.log('a raidziu yra', a);
console.log('b raidziu yra', b);
console.log('c raidziu yra', c);
console.log('d raidziu yra', d);

//4.Sugeneruokite 3 masyvus pagal
// 3 uždavinio sąlygą. Sudėkite masyvus,
// sudėdami atitinkamas reikšmes. Paskaičiuokite 
//kiek unikalių (po vieną, nesikartojančių) reikšmių ir 
//kiek unikalių kombinacijų gavote.


const raides1 = ['a', 'b', 'c', 'd'];
const raidziuMasyvas1 = [];
const raidziuMasyvas2 = [];
const raidziuMasyvas3 = [];
for (let i = 0; i < 200; i++ ){
    raidziuMasyvas1.push(raides1[rand(0, raides1.length - 1)]);
    raidziuMasyvas2.push(raides1[rand(0, raides1.length - 1)]);
    raidziuMasyvas3.push(raides1[rand(0, raides1.length - 1)]);
}

console.log('raidziuMasyvas1',raidziuMasyvas1);
console.log('raidziuMasyvas2',raidziuMasyvas2);
console.log('raidziuMasyvas3',raidziuMasyvas2);

const raidziuMiksas = [];
for (let i = 0; i < raidziuMasyvas1.length; i++){
    raidziuMiksas.push(raidziuMasyvas1[i] + raidziuMasyvas2[i] + raidziuMasyvas3[i]); //sudedam masyvo narius 0+0+0,1+1+1,2+2+2...

}

console.log('raidziuMiksas', raidziuMiksas);

const kombinacijos = [];
for (let i = 0; i < raidziuMiksas.length; i++){
    if (!kombinacijos.includes(raidziuMiksas[i])){ ////////////
        kombinacijos.push(raidziuMiksas[i]);
    }
    
}

console.log('unikalios reiksmes',kombinacijos);//kiek unikalių (po vieną, nesikartojančių) reikšmių
console.log('kiek unikaliu reiksmiu gavom:',kombinacijos.length);//kiek unikalių kombinacijų gavote.

//5.Sugeneruokite du masyvus, kurių reikšmės yra 
//atsitiktiniai skaičiai nuo 100 iki 999. 
//Masyvų ilgiai 100. Masyvų reikšmės turi būti
// unikalios savo masyve (t.y. neturi kartotis).

const masyvas11 = [];
const masyvas22 = [];

do {
    const mas11 = rand(100, 999);
    const mas22 = rand(100, 999);
    if (masyvas11.length !== 100 && !masyvas11.includes(mas11)){
        masyvas11.push(mas11)
    }
    if (masyvas22.length !== 100 && !masyvas22.includes(mas22)){
        masyvas22.push(mas22)
    }
} while ( masyvas11.length < 100 || masyvas22.length < 100);//1.darysim tol kol masyvas11 ilgis bus mazesnis uz 100. ir masyvo22 ilgis bus mazesnis uz 100

console.log(masyvas11);
console.log(masyvas22);

//6.Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
//kurios yra pirmame 5 uždavinio masyve, bet nėra antrame
// 5 uždavinio masyve.
console.log('------------');
const masyvas33 = [];
for (let i = 0; i < masyvas11.length; i++){
    if (!masyvas22.includes(masyvas11[i])){
        masyvas33.push(masyvas11[i]);
    }
}

console.log(masyvas33);

//7.	Sugeneruokite masyvą iš elementų, kurie kartojasi
// abiejuose 5 uždavinio masyvuose.

const masyvas44 = [];
for (let i = 0; i < masyvas11.length; i++){
    if (masyvas22.includes(masyvas11[i]) && !masyvas44.includes(masyvas11[i])){
        masyvas44.push(masyvas11[i]);
    }
}
console.log('------------');
console.log(masyvas44);

//8.8.	Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo 
//reikšmės, o jo reikšmės iš būtų antrojo masyvo.

//9.	Sugeneruokite 10 skaičių masyvą pagal taisyklę:
// Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
//Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. 
//Penktas trečio ir ketvirto suma ir t.t.

const masyvas55 = [];
const skaicius22 = rand(5, 25);
const skaicius33 = rand(5, 25);
masyvas55.push(skaicius22);
masyvas55.push(skaicius33);

for (let i = 2; i < 10; i++){
    masyvas55.push(masyvas55[i-2] + masyvas55[i-1]);
    
}


console.log(masyvas55);


