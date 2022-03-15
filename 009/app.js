/*function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/


//1.Klasė Animal. Kuriant objektą, turi būti įrašoma type: savybė. DONE!
//2.Pridėti savybę prie Animal sleep: true/false.
// Parašyti du metodus goSleep() ir wakeUp() DONE!
//3.Pridėti savybe food: 0; Parašyti metoda eat(amount); DONE! miegantis valgyt negali
//4.pridedam savybę foodProcessing rand 35 iki 75 (%) 
//Ir pridedent maistą skaičiuoti į food tik tą 
//procentinę dalį DONE!
//5.savybe distance. Metodas run(distance),
// prideda atstumą į savybę. DONE!
//6.viena distancija suvartoja vieną maistą.
// Aprašyti tai kode DONE!
class Animal {
    constructor (t){
       this.type = t;//type savybe 1
       this.sleep = false; //sleep savybe 2
       this.food = 0; //3
       this.foodProcessing = this.rand(35,75); //%4
       this.distance = 0;//5
    }
   
    goSleep(){ //metodas goSleep 2
        this.sleep = true;
    }
    
    wakeUpSleep(){ //metodas wakeUpSleep 2
        this.sleep = false;
    }
    
    eat(amount){
        if (!this.sleep){ //jeigu this.sleep netiesa tai 3
            this.food += amount / 100 * this.foodProcessing //cia pridedam maisto 3
        } 
    }

    //cia ydedam rend is virsaus 4
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    run(distance){
        if (!this.sleep){ //jeigu this.sleep netiesa tai pridedam. 5
           // this.distance += distance;
           if (this.food >= distance){//6
            this.food -= distance;
            this.distance += distance;
           }else {
            this.distance += this.food;
            this.food = 0;
           }
           
        } 
    }

}

const lape = new Animal('Lape');//
//console.log(lape);
//lape.goSleep();
//console.log(lape);
//lape.wakeUpSleep();
//console.log(lape);

const meska = new Animal('Meska');//
//console.log(meska);
////meska.goSleep();// jei jei nepiskirsim sito tai jipaveldes is konstruktoriaus this.sleep = false;
////meska.eat(10);//miegntis nevalgo
lape.eat(10);
lape.eat(10);
lape.run(10);
lape.run(20)
meska.run(20);//miegantis nebega



console.log(meska);
console.log(lape);
//console.log(meska);
//meska.wakeUpSleep();
//console.log(meska);

/* cia tik savybes gavom. cia tik taip parode
for(const what in meska){
    console.log('----',what);// ismes tik type ir sleep
}*/

/* namu darbai destytoojo
Objektiniai uždaviniai

1.Sukurti klasę Kibiras1. Konstruktoriuje sukurti
savybę akmenuKiekis  kuri lygi 0. Parašyti 
šiai klasei metodus, pridedančius akmenis: 
prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir
metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą
į kibirą ir rezultatų išvedimą.*/

class Kibiras1 {
    constructor (){
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni(){
        this.akmenuKiekis++; 
    }

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis; 
    }
    
    kiekPririnktaAkmenu(){
       // return this.akmenuKiekis;
       console.log(`o va tiek ${this.akmenuKiekis}`);
    }

}

const k1 = new Kibiras1();
console.log(k1);//taip objekta isspauzdinsim

k1.prideti1Akmeni();//cia idedam 1akmeni

k1.kiekPririnktaAkmenu();//cia atspauzdins (console.log(`o va tiek ${this.akmenuKiekis}`);)(virsuje) kiek nurodyta tu akmenu

k1.pridetiDaugAkmenu(5);//cia idedam dar akmen

k1.kiekPririnktaAkmenu();// cia atspauzdins kiek ju is viso turim

k1.prideti1Akmeni();//cia idedam 1akmeni

k1.kiekPririnktaAkmenu();// cia atspauzdins kiek ju is viso turim




class Pinigine {
    constructor(popieriniaiPinigai, metaliniaiPinigai){
        this.popieriniaiPinigai = popieriniaiPinigai;
        this.metaliniaiPinigai = metaliniaiPinigai;
    }
    ideti(kiekis){
        this.idetiPinigai = kiekis;
        

        
        if (this.idetiPinigai < 2 ){
            this.metaliniaiPinigai += this.idetiPinigai ;
        }
        else if (this.idetiPinigai > 2 ){
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
        }
    
    }
    skaiciuoti(){
        this.suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        return this.suma
    }

    
}

const pinigai = new Pinigine(10,5);
//console.log(pinigai);
pinigai.ideti(3);
//console.log(pinigai);
pinigai.skaiciuoti();
//console.log(pinigai);
console.log('visa pinigu suma:',pinigai.skaiciuoti());




