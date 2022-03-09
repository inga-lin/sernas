/*Susisikurt tuščią masyvą. Į tą masyvą įrašyti 10 elementų. Elementai yra su random funkcija generuoti skaičiai nuo 1 iki 6 (mesti kauliuką). Masyvą atspausdinti konsolėje DONE!*/
 
function rand(min, max) { //sita funkcija sugeneruoja sveikus skaicius
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('hello');
/* mano kodas
console.log(sum3);
skaiciai2 = [];
let skai = 0;
for (let i = 0; i < 10; i++){
    console.log(Math.floor(Math.random(skaiciai2)*10));
} */
const arr1 = []; //tuscias masyvas

for (let i = 0; i < 10; i++) { //viskas prasideda nuo 0. einam iki 10(nes elemente reik irasyti 10elementu) ir vis pridesim po 1 (i++)
    const randomDigit = rand(1, 6); // zodis RAND nurodo kad skaiciu nuo tokio iki tokio paimti(funkcija generuoti skaičiai nuo 1 iki 6)
    arr1.push(randomDigit);// i arr1 masyva istumiam (randomDigit) skaiciu(is (const randomDigit = rand(1, 6);)
    // arr1[i] = randomDigit; // imanoma, bet ne universalu!
    //visas for ciklas tai kartos 10kartu ir tai isspauzdinsim i console.log(arr1); po for ciklu
}

console.log(arr1);
console.log('-----------');

/*Sukite for ciklą 22 kartus. jo viduje su random funkcija generuokite skaičius nuo 1 iki 6 (mesti kauliuką). Paskaičiuoti visų cikle sugeneruotų skaičių sumą ir ją atspausdinti ciklui pasibaigus. DONE! */

let sum2 = 0; //kintamasis i kuria desim sugeneruotu skaiciu suma

for (let i = 0; i < 22; i++) {
    const randomDigit = rand(1, 6); // tik del aiskumo
    sum2 = sum2 + randomDigit; //Paskaičiuoti visų cikle sugeneruotų skaičių sumą
    // sum2 += randomDigit;
}

console.log(sum2);
console.log('-----------');

/*Taip pat, bet skaičiuoti tik porinių (lyginių) skaičių sumą DONE! 2.4.6*/

let sum3 = 0; //kintamasis i kuria desim porinių (lyginių) skaičių sumą

for (let i = 0; i < 22; i++) {

    const randomDigit = rand(1, 6); // tik del aiskumo
    if (randomDigit % 2 === 0) { //liepiam skaiciuoti tik lyginius skaicius
        sum3 = sum3 + randomDigit; //skaičiuoti tik porinių (lyginių) skaičių sumą
    }

    // sum2 += randomDigit;
}

console.log(sum3);

console.log('-----------');
console.log('-----------');

/*Namu.Darbai*/
/* 1)Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte. */
function rand(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const skai10 = rand(1, 6)
//console.log(skai10)
const skai11 = rand(1, 6)
//console.log(skai11)
suma11 = skai11 + skai10;
//console.log(suma11);

if (suma11 > 8){
    console.log(`Kauliuku suma ${suma11}. Jus laimejote`);
} else {
    console.log(`Kauliuku suma ${suma11}. Jus praleaimejot, bandykit dar katra`);
}

console.log('-----------');
console.log('-----------');

/*2)Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.*/
 const pilkis = rand(3, 6);
 console.log(pilkis);

 const murklys = rand(3, 6);
 console.log(murklys);

 if (pilkis > murklys){
    console.log(`Pilkis sveria ${pilkis}kg., jis yra sunkesnis uz Murkli, kuris sveria ${murklys}kg.`);
} else if (pilkis < murklys) {
    console.log(`Murklys sveria ${murklys}kg., jis yra sunkesnis uz Pilki, kuris sveria ${pilkis}kg.`);
} else if (pilkis === murklys){
    console.log('katinukų svoriai vienodi');
} else {
    console.log('Ivyko klaida');
}

console.log('-----------');
console.log('-----------');

/* 3)Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa. */
const katiniukuValtis = rand(0, 30);
console.log(katiniukuValtis);

const karviuValtis = rand(0, 30);
console.log(karviuValtis);

if ( karviuValtis <= 15 && katiniukuValtis <= 15){
    console.log('Telpa');
} else {
    console.log('Netelpa');
}

console.log('-----------');
console.log('-----------');

/*4)Antanas nusipirko naują butą ir pinigų jam liko nedaug.
// Dabar jis niekaip negali apsispręsti ką pirmiausiai
// pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
//Todėl nusprendžia ridenti kauliuką 
//(atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris
// 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti 
//skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą.
// Padėkite Antanui apsispręsti. Ridenkite kauliuką 
//ir parašykite atsakymą kokį daiktą jam pirkti.*/
const pirkiniai = rand(1, 6);
console.log(pirkiniai);

if (pirkiniai === 1 || pirkiniai === 5){
    console.log('Antanas pirks televizoriu');
} else if (pirkiniai === 3 || pirkiniai === 4) {
    console.log('Antanas pirks skalbimo masina');
} else {
    console.log('Antanas pirks saldytuva');
}

/*5)(BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki didžiausio. Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;*/

let skaiciuEile = []; //tuscias masyvas

for (let i = 0; i < 3; i++) {
    const randomDigit = rand(1, 7); 
    skaiciuEile.push(randomDigit);
}

console.log(skaiciuEile);
skaiciuEile.sort(function(a, b){
    return a - b
});
console.log(skaiciuEile);

/*pvz 
let numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);*/