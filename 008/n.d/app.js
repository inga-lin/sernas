function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* namu darbai
Objektiniai uždaviniai

1.Sukurti klasę Kibiras1. Konstruktoriuje sukurti
savybę akmenuKiekis  kuri lygi 0. Parašyti 
šiai klasei metodus, pridedančius akmenis: 
prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir
metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą
į kibirą ir rezultatų išvedimą.+*/

class Kibiras1 {
    static visiAkmenys = 0;//
    static akmenuSkaiciusVisuoseKibiruose(kiekis){
        this.visiAkmenys += kiekis;//
        
    }
    static bendrasAkmenuSkaicius(){
        console.log(`bendras per visus objektus akmenu skaicius; ${Kibiras1.visiAkmenys}`);
    }
    constructor (){
        this.akmenuKiekis = 0;
        
    }
    prideti1Akmeni(){
        this.akmenuKiekis = this.akmenuKiekis + 1; 
        Kibiras1.akmenuSkaiciusVisuoseKibiruose(1);//
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis = this.akmenuKiekis + kiekis; 
        //this.constructor.visiAkmenys += kiekis;//
        Kibiras1.akmenuSkaiciusVisuoseKibiruose(kiekis);//
    }
    
    kiekPririnktaAkmenu(){
        return this.akmenuKiekis;
        
       
    }


}

const kibiras = new Kibiras1(0);
const kibiras1 = new Kibiras1(0);
//console.log(kibiras.akmenuKiekis);
kibiras.prideti1Akmeni();
kibiras1.prideti1Akmeni();
//console.log(kibiras.akmenuKiekis);
kibiras.pridetiDaugAkmenu(20);
kibiras1.pridetiDaugAkmenu(20);
Kibiras1.bendrasAkmenuSkaicius();
//console.log(kibiras.akmenuKiekis);
console.log('Is viso pririnkta akmenu:',kibiras.kiekPririnktaAkmenu());
//console.log('Is viso pririnkta akmenu:',kibiras1.akmenuSkaiciusVisuoseKibiruose());
//console.log('bendras akmenu skaicius', this.constructor.visiAkmenys );//


/*2.Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes
popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą 
ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis
 nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu 
kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(),
kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir 
metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti
veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos
egzistuoja realiame pasaulyje.+*/

class Pinigine {
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetoss = 0;//6uzdavinys
        this.banknotaii = 0;//6uzdavinys
    }
    ideti(kiekis){
        this.idetiPinigai = kiekis;
        
        if (this.idetiPinigai < 2 ){
            this.metaliniaiPinigai += this.idetiPinigai;
            this.monetos();//6uzdavinys

        }
        else if (this.idetiPinigai >= 2 ){
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
            this.banknotai();//6uzdavinys
        }
    
    }
 
    skaiciuoti(){
        console.log('is viso tiek pinigu:', this.popieriniaiPinigai + this.metaliniaiPinigai);
        console.log('tiek monetu:', this.monetoss); 
        console.log('tiek banknotu:', this.banknotaii); 
        //return this.suma
    }
    
    monetos(){
        this.monetoss++;//6uzdavinys
        
    }

    banknotai(){
        this.banknotaii++; //6uzdavinys

    }

    
}

const pinigai = new Pinigine();
//console.log(pinigai);
pinigai.ideti(1);
console.log(pinigai);
pinigai.ideti(3);
console.log(pinigai);
pinigai.ideti(5);
console.log(pinigai);
pinigai.skaiciuoti();
console.log(pinigai);
//console.log('visa pinigu suma:',pinigai.skaiciuoti());


/*3.Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę 
keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: 
ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat 
parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu 
važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu 
važiuoti neigiamas keleivių skaičius negali.+*/


class Troleibusas {
    static visiKeleiviai = 0;//4
    static bendrasKeleiviuSkaicius(keleiviuSkaicius){//4
        this.visiKeleiviai += keleiviuSkaicius;
    }
    constructor(){
        this.keleiviuSkaicius = 0;
    } 

    
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);//4
    }

    islipa(keleiviuSkaicius){
        this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        if (this.keleiviuSkaicius < 0 ){
            this.constructor.visiKeleiviai(-this.keleiviuSkaicius);//4
            console.log('troleibusu važiuoti neigiamas keleivių skaičius negali');
            
        } else {
            console.log('autobuse vaziuoja',keleiviai.vaziuoja());
            this.constructor.visiKeleiviai -= keleiviuSkaicius; //4
        }
    }

    vaziuoja(){
        return this.keleiviuSkaicius;
    }

    keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log('bendras Keleiviu Skaicius',this.constructor.visiKeleiviai);
    }
}

const keleiviai = new Troleibusas ();
const keleiviai1 = new Troleibusas ();//4

//console.log((keleiviai));
keleiviai.ilipa(20);
keleiviai1.ilipa(5);
//console.log(keleiviai);
keleiviai.islipa(5);
//console.log(keleiviai);
keleiviai.vaziuoja();
keleiviai.keleiviuSkaiciusVisuoseTroleibusuose();//4
//console.log(keleiviai);
//console.log('autobuse vaziuoja',keleiviai.vaziuoja());



/*4.(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų 
keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas 
bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus 
ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).++-*/



/*5.(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti 
savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: 
idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti 
metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą 
(turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, 
tokiu atveju produktų kiekis turėtų sumuotis.+*/

class PirkiniuKrepselis{
    constructor (){
        this.turinys = new Map();
        this.turinys.set('surelis', 0);
        this.turinys.set('pienas', 0);
        this.turinys.set('duona', 0);
    }

    idetiSureli(kiekis){
        this.turinys.set('surelis', this.turinys.get('surelis') + kiekis);
    }

    idetiPieno(kiekis){
        this.turinys.set('pienas', this.turinys.get('pienas') + kiekis);
    }

    idetiDuonos(kiekis){
        this.turinys.set('duona', this.turinys.get('duona') + kiekis);
    }

    krepselioTurinys(){
        console.log(this.turinys);
    }
}

const pirkiniai = new PirkiniuKrepselis();
pirkiniai.idetiSureli(10);
pirkiniai.idetiSureli(30);
pirkiniai.idetiPieno(20);
pirkiniai.idetiDuonos(10);
pirkiniai.krepselioTurinys();
console.log('pirkiniai',pirkiniai);

/*6.Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek 
piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris
skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių 
pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) 
laikykite vienu banknotu ar viena moneta.+*/

/*7.(STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą 
akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose 
pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti 
akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą 
bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės 
visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). 
Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(), 
 pridetiDaugAkmenu(kiekis).+*/

/*8.Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti 
pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris 
keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- 
kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną 
kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje 
yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę 
į dar mažesnę.+*/

class Stikline {
    constructor (vanduo){
        this.turis = vanduo;
        this.kiekis = 0;
    }

    ipilti(kiekis){
        if (this.turis < kiekis){
            this.kiekis = this.turis;
        } else {
            this.kiekis = kiekis;
        }
    }

    ispilti(kiekis){
       if (kiekis > this.turis){
           this.kiekis = 0;
       } else {
           this.kiekis -= kiekis;
       }
    }

    stiklinejeYra(){
     console.log(this.kiekis);
    }
}

const stik1 = new Stikline(200);
const stik2 = new Stikline(150);
const stik3 = new Stikline(100);
stik1.ipilti(200);
console.log(stik1);
stik1.ispilti(150);
stik2.ipilti(150);
stik1.ispilti(50);
stik3.ipilti(50);
console.log(stik1);
stik1.stiklinejeYra();
stik2.stiklinejeYra();
stik3.stiklinejeYra();
console.log('stikline',stik1);

/*9.Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę 
dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę 
prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip 
pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) 
priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false 
ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) 
metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų 
(gali būti truputį daugiau nei dydis)+.
*/

class Grybas {
    constructor(){
        this.valgomas = Math.random() < 0.5;
        this.sukirmijes = Math.random() < 0.5;
        this.svoris = rand(5, 45);
        //this.krepsys = new Krepsys();
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys {
    constructor(){
        this.dydis = 500;
        this.prikrauta = 0;


    }
    eitiGrybauti(grybukas){
        if (grybukas.valgomas && !grybukas.sukirmijes){
            this.prikrauta += grybukas.svoris;
        }
    }
}


const krepselis = new Krepsys();

do {
    krepselis.eitiGrybauti(new Grybas());
    console.log(krepselis.prikrauta);
} while(krepselis.dydis > krepselis.prikrauta);



var get = function(cls) {
    return document.getElementsByClassName(cls)[0];
  };
  
  get('demo').innerHTML = +get('txt1').innerHTML + +get('txt2').innerHTML;

  /*10.Sukurti klasę Vaisiai. Konstruktoriuje sukurti dvi savybes
prakastiObuoliai ir sveikiObuoliai. Parašyti metodą 
krepselia(kiekis), kuris prideda obuolius į krepseli.// Jeigu kiekis
 nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu 
kitaip- prie popieriniaiPinigai.// Parašykite metodą skaiciuoti(),
kuris suskaičiuotų ir išvestų į konsolę prakastiObuoliai ir 
sveikiObuoliai sumą. Sukurti klasės objektą ir pademonstruoti
veikimą. Nesvarbu koks prakastiObuoliais ir sveikiObuoliai
egzistuoja realiame pasaulyje.+*/

class Vaisiai{
    constructor(){
        this.prakastiObuoliai = 0;
        this.sveikiObuoliai = 0;

    }
    krepselis(kiekis){
        this.idetiObuoliai = kiekis;

        if (this.idetiObuoliai < 2){
            this.prakastiObuoliai += this.idetiObuoliai;
        }
        else if(this.idetiObuoliai >= 2){
            this.sveikiObuoliai += this.idetiObuoliai;
        }
    }
    skaiciuoti(){
        console.log('isviso obuoliu',this.prakastiObuoliai + this.sveikiObuoliai);
        console.log('prakasti obuoliai', this.prakastiObuoliai);
        console.log('sveiki obuoliai', this.sveikiObuoliai);
    }
}

const vaisiai = new Vaisiai();
vaisiai.krepselis(1);
vaisiai.krepselis(1);
vaisiai.krepselis(2);
vaisiai.krepselis(2);
vaisiai.krepselis(2);
vaisiai.skaiciuoti();

//11 sukuriu random sveika arba nesveika obuoli

const obuoliai = [];
for (let i = 0; i < 10; i++){
    obj = {};
    const obuoliuBukle = Math.random() < 0.5;
    if (obuoliuBukle === false){
        obj.obuolys = "prakastas";
    } else {
        obj.obuolys = "sveikas";
    }
    console.log(obuoliuBukle.length);
    obuoliai.push(obj);
}
console.log(obuoliai);

let prakastiObuo = 0;
let neprakastiObuo = 0;
for (let k = 0; k < obuoliai.length; k++){
    
    if (obuoliai[k].obuolys === 'prakastas'){
        prakastiObuo++
    } else {
        neprakastiObuo++
    }
}
//obuoliai.forEach(obj => prakastiObuo =  obj.obuolys === 'prakastas' ? prakastiObuo + 1 : prakastiObuo);
//obuoliai.forEach(obj => neprakastiObuo =  obj.obuolys === 'sveikas' ? neprakastiObuo + 1 : neprakastiObuo);
console.log('prakastas',prakastiObuo);
console.log('sveiki',neprakastiObuo);