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