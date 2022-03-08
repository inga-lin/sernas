console.log('llla');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
const namas1 = ['Vytas', 'Aiste', 'bebras'];
console.log(namas1);
console.log('namo aukstis', namas1.length);

//Sukurti naują masyvą, 11 aukštų, kurio elementai atsitiktiniai skaičiai nuo 5 iki 25 DONE!

const namas2 = [];
for (let i = 0; i < 11; i++){
    namas2.push(rand(5, 25));
}
console.log(namas2);

const namas12 = ['lina', 'Alina', 'zirafa'];
const namas22 = [
    ['vytas', 'linaaa'],
    ['Aiste', 'Alina'],
    ['Bebras' ,'zirafa']
];
console.log(namas22);
console.log(namas22[2][0]);

//sukurti masyva is 11element, kiekvienas elementas yra masyvas is dvieju elementu- atsitiktiniu skaiciu nuo 5 iki 25.
 const namas33 = [];
 for (let i = 0; i < 11; i++){
     
    const floor = []; //tuscias aukstas is 2
    for (let k = 0; k < 2; k++ ){
        floor.push(rand(5, 25));
    }
    namas33.push(floor);
 }

 console.log(namas33);
 console.log(namas33[2][0]);
*/

const namas1 = ['Vytas', 'Aiste', 'Bebras'];

console.log('Bebras:', namas1[2]);

const namas2 = [
    ['Vytas', 'Lina'],
    ['Aiste', 'Alina'],
    ['Bebras', 'Žirafa']
];

console.log('Bebras:', namas2[2][0]);

console.table(namas2);
console.log('namo aukštis: ', namas2.length);

//Sukurti naują masyvą, 11 aukštų, 
//kurio elementai atsitiktiniai skaičiai nuo 5 iki 25 DONE!
const hause1 = [];
for (let i = 0; i < 11; i++) {
    hause1.push(rand(5, 25));
}


console.log('---------');
//sukurti masyva is 11element, kiekvienas elementas yra masyvas 
//is dvieju elementu- atsitiktiniu skaiciu nuo 5 iki 25.
 /*destytojo*/
 const hause2 = [];
 for (let i = 0; i < 11; i++) {

    // aukstas
    const floor = [];
    for (let k = 0; k < 2; k++) {
        floor.push(rand(5, 25));
    }
    // aukstas

    hause2.push(floor);
}
console.table(hause2);

console.log('---------');
console.log('---------');
//3.Imame vokišką hause1 ir naudodami for o poto forEach nuskaitome, 
//kiekvieną narį atskirai išspauszdindami consolėje DONE!

for (let i = 0; i < hause1.length; i++){
    console.log(hause1[i]); // visus aukstus isspauzdins atskitoje eiluteje

}
console.log('---------');
//2variantas su forEach
//hause1.forEach(() 
//hause1.forEach((el) =>
//hause1.forEach((el) =>

hause1.forEach(el => {
    console.log(el);
});

//hause1.forEach(el => console.log(el)); trumpiausias variantas

//4.Imame vokišką hause2 ir naudodami for 
//o poto forEach nuskaitome, kiekvieną narį atskirai
// išspauszdindami consolėje DONE!
let hause222 = [];

for (let i = 0; i < hause2.length; i++){
    
    for (let k = 0; k < hause2[i].length; k++){
        console.log(hause2[i][k]);
    }

}
//antras variantas
console.log('-----');
// lipame per aukstus
hause2.forEach(floor => {
    // gauname auksta
    // tada lipame per aukstus
    floor.forEach(flat => {
    // gauname butus
    console.log(flat);
    });
});