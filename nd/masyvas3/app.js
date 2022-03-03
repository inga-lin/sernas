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
