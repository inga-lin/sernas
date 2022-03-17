function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('labas');

//1.Sukurti klasę Karve. Karve objektas turi savybę melzejai: 
//kuri yra masyvas is 30 random skaičių nuo 100 iki 999.
// Sukurti klasę, iš jos pagaminti objektą ir jį atspausdinti.
// DONE!

class Karve {
    constructor (){//1
        this.melzejai = [];//1
        for (let i = 0; i < 30; i++){//1
           // const m = this.rand(100,999);//1
           // this.melzejai.push(m);//1
            this.melzejai.push(this.rand(100,999));
        }
        
    }
    rand(min, max) {//2
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const melzejai1 = new Karve();//mano 1
console.log(melzejai1);//mano 1

console.log(new Karve());//destytojo


//SPREAD -paskirstyti

const arr = ['Krokodilas', 'Gena'];

//kur galim ji skirstyti? tarkim i funkcija
const b = (a,b) => {
    console.log('a:', a, 'b:', b);
}

b(7,8);//a: 7 b: 8
b(arr);//a: (2) ['Krokodilas', 'Gena']0: "Krokodilas"1: "Gena"length: 2[[Prototype]]: Array(0) b: undefined
b(...arr);//jis paskirste a: Krokodilas b: Gena

const arr2 = [arr];
console.log(arr2);//0: (2) ['Krokodilas', 'Gena']

const arr3 = [...arr];
console.log(arr3);// ['Krokodilas', 'Gena'] 
//0: "Krokodilas"
//1: "Gena"
//length: 2

console.log(Array(33));


//MAP -grazina arejaus kopija

const arrCopy = arr.map(value => { //value cia bus krokodilas ir gena
    return value + 'kulverstukas';
});

console.log(arrCopy);

const arrCopy1 = [...Array(33)].map(value => { //value cia bus krokodilas ir gena
    return 'kulverstukas';
});

console.log(arrCopy1); //grazins 30kulverstuku

//3Sukurti masyvą iš 100 elementų rand 100 -999 
//ir naudojant map metodą sukurti du masyvus, kurie: 
//1 visi lementai didesni už 500 būtų lygus 0; 2 visi 
//elementai mažesni už 300 būtų masyvai iš 2 elementų, 
//kuriuose 1 elementas 0 o antras elementas tas skaičius. DONE!

/*const masyvas100 = [];

for (let i = 0; i < 100; i++){
    masyvas100.push(rand(100,900));
}
console.log(masyvas100);*/

const big = [];

for (let i = 0; i < 100; i++){
    big.push(rand(100,900));
}
//kaip visas reiksmes paversti kulverstukais
/*const kul = big.map(v => {//1
    if (v > 500){
        return 0;
    }
    return v;
    //return 'kulverstukas'
});*/

const kul = big.map(v => {//su map paiimam big copyje ir ja panaudojam
    if (v > 500){
        return 0;
    }
    return v;
    //return 'kulverstukas'
});

const kul1 = big.map(v => {// visi 
    //elementai mažesni už 300 būtų masyvai iš 2 elementų, 
    //kuriuose 1 elementas 0 o antras elementas tas skaičius
    if (v < 300){
        return [0, v];//
    }
    return v;
    //return 'kulverstukas'
});

console.log(big);
console.log(kul);
console.log(kul1);

//ternary

const kul2 = big.map(v => v < 300 ? [0, v] : v);
console.log(kul2);

//kopija, kurioje yra žodžiai lyginis arba nelyginis DONE!

const kul3 = big.map(v => v % 2 ? 'lyginis' : 'nelyginis');

console.log(kul3);
    
