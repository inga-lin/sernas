console.log('masyvas');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*1)Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus). */
const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė']; 
//console.log(bitGirls);
bitGirls.unshift ('Nausėdą'); //pridedam i prieki nauseda(jeigu butu vietoje .unshift butu .push tai nauseda i gala idetu)
console.log(bitGirls);

/*2)Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų elementus iš mažų, dviejų narių, masyvų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba“normalus”.*/

const cats11 = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];
const bitCats1 = []
for (let i = 0; i < cats11.length; i++ ){
    const kate0 = [];
    const randomDigit = rand(0, 1);
    kate0.push(cats11[i]);
    kate0.push(randomDigit === 1 ? 'storas' : 'normalus');
    bitCats1.push(kate0);
}

console.log(bitCats1);

/*3)bitCats masyve suskaičiuokite kie yra storų ir normalių katinukų.*/
let storosKates = 0;
let normaliosKates = 0;
for (let i = 0; i < bitCats1.length; i++){
    const formos = bitCats1[i][1];
    if (formos === 'storas'){
        storosKates++;
    } else {
        normaliosKates++;
    }
}

console.log(storosKates);
console.log(normaliosKates);
/*4)Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.*/
 console.log(bitCats1);
 bitCats1.sort((a, b) => {
    if (a[0][1] > b[0][1]) {
        return 1;
    }
    if (a[0][1] < b[0][1]){
        return -1
    }
    return 0;
 });

 console.log(bitCats1);
 
/*5)(BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.*/
const happyCats = [];
let j = 0;
for (i = 0; i < bitGirls.length; i++){
    const daugVardu = [];
    
    if ( bitGirls[i] !== 'Nausėdą') {
        daugVardu.push(bitGirls[i]);
        daugVardu.push(bitCats1[j][0]);
        happyCats.push(daugVardu);
        j++
    } else {
        daugVardu.push(bitGirls[i]);
        daugVardu.push('barsukas');
        happyCats.push(daugVardu);
    }

} 

console.log(happyCats);

console.log('--------');

/*masyvo N.D.*/
//1Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
let pinigine = [];
for (i = 0; i < rand(10, 30); i++ ){
    pinigine.push(rand(0, 10));//push tik masyve
}

console.log(pinigine);

//2Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let piniguSuma = 0;
for ( i = 0; i < pinigine.length; i++){
    piniguSuma = piniguSuma + pinigine[i];
}

console.log(piniguSuma);

//3Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;


let sumaPinigu = 0;

for ( i = 0; i < pinigine.length; i++){
    if (pinigine[i] > 2){
        sumaPinigu = sumaPinigu + pinigine[i]
    }
}
console.log(sumaPinigu);

//4 Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
const naujaPinigine = [];

for (i = 0; i < pinigine.length; i++){
    if (pinigine[i]  > 2){
        naujaPinigine.push(pinigine[i]);
    } else {
        naujaPinigine.push(0);
    }
}
    
console.log(naujaPinigine);

//5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let didziausiasSkaicius = 0;

for ( i = 0; i < pinigine.length; i++){
    if(pinigine[i] > didziausiasSkaicius){
        didziausiasSkaicius = pinigine[i];
    }
}

console.log(didziausiasSkaicius);

let didziausiuSkaiciuSkaicius = 0;
for ( i = 0; i < pinigine.length; i++){
    if (didziausiasSkaicius === pinigine[i]){
        didziausiuSkaiciuSkaicius += 1;
    }
}

console.log(didziausiuSkaiciuSkaicius);


//6.Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

const naujasMasyvas = [];
for (i = 0; i < pinigine.length; i++){
    if(pinigine[i] === 0){
        naujasMasyvas.push(i);
    } else {
        naujasMasyvas.push(pinigine[i]);
    }
}
console.log(naujasMasyvas);

//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

const naujaPiniginesReiksme = 30 - pinigine.length;
console.log(naujaPiniginesReiksme);

for (i = 0; i < naujaPiniginesReiksme; i++){
    pinigine.push(rand(0, 10));   
}

console.log(pinigine);

//8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

const mazesniUz2 = [];
const didesniUz2 = [];

for ( i = 0; i < pinigine.length; i++){
    if (pinigine[i] > 2){
        didesniUz2.push(pinigine[i]);
    } else{
        mazesniUz2.push(pinigine[i]);
    }
}

console.log(mazesniUz2);
console.log(didesniUz2);

//9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

const uzduotis9 = [];
uzduotis9.push(mazesniUz2);
uzduotis9.push(didesniUz2);
console.log(uzduotis9);

//10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
uzduotis9.push(korteles)
console.log(uzduotis9);

//11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

korteles.sort();
console.log(uzduotis9);

//12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
 const naujosKorteles = 20 - korteles.length;
 console.log(naujosKorteles);

 for ( i = 0; i < naujosKorteles; i++){
    const nK = rand(0, 1);
    if (nK === 0){
        korteles.push('MasterCard');
    } else {
        korteles.push('Visa');
    }
 }

 console.log(korteles);

//13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

 let master = 0;
 let visa = 0; 

for ( i = 0; i < korteles.length; i++){
     if (korteles[i] === 'MasterCard'){
         master++ ;
     }
     if (korteles[i] === 'Visa'){
        visa++ ; 
    }
}

console.log(master);
console.log(visa);

// 14.Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
const loterijosBilietai = [];
for (i = 0; i < 10; i++){
    loterijosBilietai.push(rand(1000000000, 9999999999))
}

console.log(loterijosBilietai);

uzduotis9.push(loterijosBilietai);
console.log(uzduotis9);

//15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
loterijosBilietai.sort()
console.log(loterijosBilietai);   

//16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

console.log(didesniUz2); 
/*let pinigai500 = 0;
let y = [];
do {
    const x = rand(3, 10);
    if (pinigai500 + x <= 500 ){
        pinigai500 = pinigai500 + x;
        y.push(x);
    }

}while (pinigai500 !== 500 && pinigai500 < 501);

console.log(pinigai500); */

//17.Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log(loterijosBilietai);

let kiekBilietu = 0;
for ( i = 0; i < loterijosBilietai.length; i++){
    if (loterijosBilietai[i] % 777 === 0){
        kiekBilietu++ ;
    }
}

console.log(kiekBilietu);

//18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
const nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
uzduotis9.push(nuotraukos);
console.log(uzduotis9);

nuotraukos.sort((a, b) => {
    if (a.length > b.length){
        return 1
    }
    if (a.length < b.length){
        return -1
    }
    return 0;
});

console.log(nuotraukos);