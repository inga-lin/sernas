console.log('masyvassss');
/*
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/

//mano
const obj = {};
obj.name = 'murka';

console.log(obj);

const obj2 = {};
obj2.name = 'rainis';

console.log(obj2);

//sukurti objektą cat, kuris turi savybę name. DONE!
//Prie katinų dar pridėti weight: ir uodegos
// ilgį tail: ir ownerName DONE!

const cat = {name: 'Murka',
weight: 5,
tail: 22,
ownerName: 'Maryte'
};
console.log(cat.name);

const cat2 = {name: 'Murka',
weight: 10,
tail: 20,
ownerName: 'Inga'};

console.log(cat);
console.log(cat2);

//Dar vieną, šunį DONE!
const suo = { 
    name: 'Dina',
    weight: 10,
    tail: 22,
    ownerName: 'Lina'
}

console.log(suo);

console.log([]);

//clasiu naudojimas (objektu sukurimas naudojant class)
class Cat { //kuriam katino klase
    constructor(name, svoris, t, seimininkas){ //turinys arba planas vadinasi constructor, kuris kuria objekta

        this.name = name;//cia rasom plana kaip norim sukurti ta objekta antras name yra kintamasis
        this.weight = svoris;
        this.tail = t;
        this.ownerName = seimininkas;
    }
};

console.log(Cat);

const cat3 = new Cat('Ryzas', 5, 12, 'Saulenas'); // eina situ eiliskumu-constructor(name, svoris, t, seimininkas)
console.log(cat3);//cat3 yra objektas

const cat4 = new Cat('Baktuoklis', 7, 20, 'Birute' ); //cat4 yra objektas
console.log(cat4);//cat4 yra objektas

//this. pakeicia i cat arba cat2. butu cat.name o dabas bus this.name
/*class cats {
    constructor(name) {
        this.name = name;
        this.weight = weight;
        this.tail = tail;
        this.ownerName = ownerName;
    }
}

console.log(cats);*/

//Reikia sukurti objektą, kurio klasė yra KauliukoMetimas. 
//Jis turi savybę rezultatas rand nuo 1 iki 6; Dar turi 
//savybę vardas, kuris yra jūsų sugalvotas vardas. DONE!

//mano
class KauliukoMetimas1 {
    constructor ( vardas){
        this.vardas = vardas;
        this.rezultatas = this.rand(1,6);
        
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const kauliukas2 = new KauliukoMetimas1('Jonas')
console.log(kauliukas2);

//destytojo
class KauliukoMetimas {
    constructor (vardas){
        this.vardas = vardas;
        this.rezultatas = this.rand(1,6);
        
    }
    //jei virsuje neturim sito tai reik ji cia isideti ir cia (virsuje prie this.rezultatas = ) this. prideti (= this.rand(1,6);)
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    metaKauliuka(){
        this.rezultatas = this.rand(1,6);
    }

    nunulinti(){
        this.rezultatas = 0;
    }

    pakeistiVarda(naujas){
        this.vardas = naujas;
    }
}

const kauliukas1 = new KauliukoMetimas('Jonas')
console.log(kauliukas1);

kauliukas1.metaKauliuka();
console.log(kauliukas1);

kauliukas1.nunulinti();
console.log(kauliukas1);

kauliukas1.pakeistiVarda('petriukas');
console.log(kauliukas1);

