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
į kibirą ir rezultatų išvedimą.*/

class Kibiras1 {
    constructor (kiekis){
        this.akmenuKiekis = kiekis;
        
    }
    prideti1Akmeni(){
        this.akmenuKiekis = this.akmenuKiekis + 1; 
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis = this.akmenuKiekis + kiekis; 
    }
    
    kiekPririnktaAkmenu(){
        return this.akmenuKiekis;
    }


}

const kibiras = new Kibiras1(5);
//console.log(kibiras.akmenuKiekis);
kibiras.prideti1Akmeni();
//console.log(kibiras.akmenuKiekis);
kibiras.pridetiDaugAkmenu(15);
//console.log(kibiras.akmenuKiekis);
console.log('Is viso pririnkta akmenu:',kibiras.kiekPririnktaAkmenu());



/*2.Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes
popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą 
ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis
 nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu 
kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(),
kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir 
metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti
veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos
egzistuoja realiame pasaulyje.*/

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
        else if (this.idetiPinigai > 2 ){
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
važiuoti neigiamas keleivių skaičius negali.*/

class Troleibusas {
    constructor(kiekis){
        this.keleiviuSkaicius = kiekis;
    } 

    
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius){
        this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        if (this.keleiviuSkaicius < 0 ){
            
            console.log('troleibusu važiuoti neigiamas keleivių skaičius negali');
            
        } else {
            console.log('autobuse vaziuoja',keleiviai.vaziuoja());
        }
    }

    vaziuoja(){
        return this.keleiviuSkaicius;
    }
}

const keleiviai = new Troleibusas (5);
//console.log((keleiviai));
keleiviai.ilipa(5);
//console.log(keleiviai);
keleiviai.islipa(3);
//console.log(keleiviai);
keleiviai.vaziuoja();
//console.log(keleiviai);
//console.log('autobuse vaziuoja',keleiviai.vaziuoja());




/*4.(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų 
keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas 
bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus 
ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).*/

/*5.(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti 
savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: 
idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti 
metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą 
(turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, 
tokiu atveju produktų kiekis turėtų sumuotis.*/

class PirkiniuKrepselis{
    constructor (k){
        this.turinys = k;
    }
}

/*6.Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek 
piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris
skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių 
pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) 
laikykite vienu banknotu ar viena moneta.*/

/*7.(STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą 
akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose 
pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti 
akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą 
bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės 
visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). 
Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).*/

/*8.Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti 
pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris 
keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- 
kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną 
kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje 
yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę 
į dar mažesnę.*/

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

    ispilti(){
        if (this.turis < this.kiekis){
            this.kiekis = this.turis;
        } 
    }

    stiklinejeYra(stiklinejeYraa){

    }
}

const stik = new Stikline();
stik.ipilti(10);
console.log(stik);
stik.ispilti();
console.log(stik);
stik.stiklinejeYra();
console.log(stik);

/*9.Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę 
dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę 
prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip 
pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) 
priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false 
ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) 
metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų 
(gali būti truputį daugiau nei dydis).
*/

var get = function(cls) {
    return document.getElementsByClassName(cls)[0];
  };
  
  get('demo').innerHTML = +get('txt1').innerHTML + +get('txt2').innerHTML;