function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//n.d. uzdaviniai su Map ir Set
const food = ['bandelė', 'bulkutė', 'duona', 'batonas', 'pyragas', 'baronka', 'riestainis', 'javainis', 'paplotėlis'];

/*function foooodas(a,b){
    //if (a > b) return 1;//cia isrusiuojam eiles tvarka nuo a iki z
    if (a > b) return -1;//cia isrusiuojam eiles tvarka nuo z iki a
}
let food1 = food.sort(foooodas);//cia rusiuojam zodzius pasirinkta tvarka is functios
console.log(food1);*/ 

/*1.Sukurti Map tipo objektą. Į jį sudėti rand() 5 - 25 skaičius.
Kaip raktus naudoti masyvo food reikšmes.*/
const map = new Map();
for (let i = 0; i < food.length; i++){
    map.set(food[i], rand(5,25)); //raktas yra food[i], reisme(value)- rand(5,25)
}
console.log(map);


/*2.Sukurti Map tipo objektą. Kaip raktus naudoti rand() 10 - 20 
skaičius, o kaip reikšmes naudoti food masyvo elementus. 
Elementai į Map objektą turi būti sudėti eilės tvarka kaip
jie sudėti masyve ir visi. Raktų reikšmių eiliškumas,
tuo tarpu, turi būti atsitiktinis.*/
const map1 = new Map();
for (let i = 0; i < food.length; i++){
    x = 0;
    do {
        y = rand(10,20);
        if (!map1.has(y)){
            x = y;
            break;
        }
    }
    while(true);
    map1.set(x, food[i]);
}


console.log(map1);

/*3.Sukurti Map tipo objektą, kaip antro uždavinio Map
objekto kopiją (kloną). Sukurtame objekte išrūšiuoti 
elementus pagal abėcėle priešinga tvarka (z - a).*/
//const map2 = map1;
const map2 = new Map(map1);

console.log('paprasta tvarka',map2);

let arr2 = [...map2]; //paverciam i areju
//console.log('ccc',arr2); 
function Abc(a, b) {
    if (a[1] > b[1]) return -1;
    //if (a[1] < b[1]) return 1;
    //return 0;
}

arr2 = arr2.sort(Abc); //isrusiuoja nuo z iki a raides
console.log('abcccc',arr2); 

const obj4 = new Map (arr2);//is arejaus padarom Map obj

console.log('abc',obj4);



/*const clone = new Map([...price].sort(([,a], [,b]) =>  b.localeCompare(a)))
console.log(clone);*/
//console.log('kopija',map1); 


/*4.Sukurti Set tipo objektą. Į jį sudėti food masyvo reikšmes.
Iš gauto Set objekto pašalinti visas reikšmes, kuriose antroji
raidė yra “a”.*/
const set = new Set();
for (let i = 0; i < food.length; i++){
    set.add(food[i]);
    
}
console.log('4',set);

for (let i = 0; i < food.length; i++){
    if (food[i][1] === 'a'){//jei antra raide = a
        set.delete(food[i])//istrinam ta zodi
    }
}

console.log('be a raides',set);
/*5.Sukurti Set tipo objektą, kuriame būtų 22 reikšmės
rand() 5 - 35 skaičiai.*/

const set1 = new Set();
do {
    set1.add(rand(5,35));
}
while(set1.size !== 22)//daryti toj kol gausim 22unikalias reiksmes
console.log(set1);

