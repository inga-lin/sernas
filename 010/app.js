/*function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/
console.log('labas');

class K { //k -objektas
    
    static count = 22; //objekto viduje jo nera
    //kaip ji galim pasiekti, ta statia
    constructor(a){
        this.amount = a; //objekto savybe
    }

    changeAmount(value){ //pakeiciam amaunto reiksme objekto savbe
        this.amount = value;
    }

    changeCount(value){
        K.count = value; // kadangi jis statinis ji reik pasiekti ne per this o per kclasse K
    }

}

const obj1 = new K(5);

const obj2 = new K(8);

obj2.changeAmount(77);
obj2.changeAmount(70);
obj2.changeCount(88);
obj2.changeCount(100);

console.log('obj1', obj1);
console.log('obj2', obj2);

console.log('statinis',K.count);// cia gaunam static count = 22; 

//1,Susikuriam klase Anukas. Klasėje yra statinis kintamasis senelioPalikimas = 10000; DONE!
//2.Sukurti savybe pinigai, kuri yra rand nuo 1000 iki 2000;
// Ir sukurti 3 anūkus objektus DONE!
//3.Parašyti funkciją isleist(), kuri išleidžia 1000 eur Jeigu pinig 
//anūkas turi mažiau į konsole išvesti pranešimą PINGŲ NĖRA! DONE!
//4.paimtiIsSenelio toks metodas, kuris iš senelio palikimo 
//paima 2000 ir prideda prie anūko pinigų DONE!
//5.papildyti metodą tikrinimu ir jeigu pinigų palikime nėra,
// rodyti pranešimą PALIKIMAS IŠTAŠKYTAS - EIKIT DIRBT! DONE!
//6.
class Anukas {
    static senelioPalikimas = 10000; //1.
    
    static mokesciuInspekcija(){ //statinis isorinis  metodas //6
        this.senelioPalikimas = 0; //Anukas.senelioPalikimas- veiktu bet butu neteisinga(buten statikoje)
        console.log(this);//cia this yra (cia nera objekto) atspindi classe Anukas
    }
    constructor (){
        this.pinigai = this.rand(1000,2000)//2
        console.log(this);//this cia yra objektas anukas1, anukas2,anukas3 
    }


    
    isleisti(){ //objektinis metodas
        if (this.pinigai >= 1000){
            this.pinigai = this.pinigai - 1000;
            console.log('nusipirkau');
        } else {
            console.log('pinigu nera');
        }
    }
    rand(min, max) {//2
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    paimtiIsSenelio (){ //objektinis metodas
        if (this.constructor.senelioPalikimas !== 0){//5  Anukas.senelioPalikimas === this.constructor.senelioPalikimas
            this.constructor.senelioPalikimas = this.constructor.senelioPalikimas - 2000;//4
            this.pinigai = this.pinigai + 2000;//4
        } else {//5
            console.log('PALIKIMAS IŠTAŠKYTAS - EIKIT DIRBT');//5
        }
    }


    /*isleisti (){
        for (let i = 0; i < this.pinigai; i++){
            this.pinigai -= 1000;
            if (this.pinigai < 0){
                console.log('neliko pinigu');
            }
        }
        
    }*/
}

const anukas1 = new Anukas();//2
const anukas2 = new Anukas();//2
const anukas3 = new Anukas();//2

anukas1.isleisti();//3
anukas1.isleisti();//3

anukas2.isleisti();//3
anukas2.isleisti();//3

anukas3.isleisti();//3

Anukas.mokesciuInspekcija();
anukas3.paimtiIsSenelio();//4
anukas3.paimtiIsSenelio();//4

anukas2.paimtiIsSenelio();//5
anukas2.paimtiIsSenelio();//5
anukas3.paimtiIsSenelio();//5
anukas3.paimtiIsSenelio();//5

//O tie statiniai 10000 gali buti pvz papildomi 'is isores'?
//const mociutesPalikimas = 20000;
//Anukas.senelioPalikimas = mociutesPalikimas;//i senelio palikima idedam mocutes


console.log(anukas1);//2
console.log(anukas2);//2
console.log(anukas3);//2

console.log(Anukas.senelioPalikimas);

console.log('Senelio palikima',Anukas.senelioPalikimas);//2



//1.Sukuriam klasę Zveris; Zveris turi statinį miskas, 
//kuris yra masyvas. Kurkite naują Zveris objektą, jam 
//priskirdami rusis savybę. Sukurtą objektą pridedame į miskas savybę DONE!
//2.Parašyti statinį metodą naujasZveris(r),
// kuris kurtų naują žvėrį DONE!

class Zveris {
    static miskas = [];//1

    static naujasZveris(r){//2
       return new this(r);//2 new Zveris(r) === new this(r) //kuriant nauja objekta turim panaudoti new zodeli
        
    }

    constructor (r){//1
        this.rusis = r;//1
        this.constructor.miskas.push(this);//1
    }
}

const z1 = new Zveris('lape');//1
const z2 = new Zveris('baubas');//1
const z3 = new Zveris('triusis');//1

Zveris.naujasZveris('bebras');//2
console.log(z3);
console.log(Zveris.miskas);//1