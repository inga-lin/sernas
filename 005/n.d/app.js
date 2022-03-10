console.log('masyvas');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];


const saskaitos = [];
for (let i = 1; i < 101; i++){
    const obj = {};
    obj.number = 'INV' + i.toString().padStart(3, '0');
    const products1 = [];
    for (let j = 0; j < rand(1, 10);  j++){
        const obj2 = {};
        obj2.title = products[Math.floor(Math.random() * products.length)];
        obj2.price = rand(1, 100).toFixed(2);
        obj2.amount = rand(1, 20);
        obj2.total = obj2.price * obj2.amount;
        products1.push(obj2);
    }
    obj.products = products1;
    let total1 = 0;
    for (let k = 0; k < products1.length; k++){
        total1 += products1[k]['total'];
    }
    obj.total = total1;
    obj.vat = total1 * 0.21;

    obj.grandTotal = obj.total + obj.vat;
    
    saskaitos.push(obj);
}

console.log(saskaitos);

let grandTotal = 0;
for ( let i = 0; i < saskaitos.length; i++){
    grandTotal += saskaitos[i]['grandTotal'];
}
console.log(grandTotal);

for (let i = 0; i < products.length; i++){
    let kiekis = 0;
    let suma = 0;
    for ( let j = 0; j < saskaitos.length; j++){
        for ( let k = 0; k < saskaitos[j]['products'].length ; k++){
            if (saskaitos[j]['products'][k]['title'] === products[i]){
                kiekis += saskaitos[j]['products'][k]['amount'];
                suma += saskaitos[j]['products'][k]['total'];
            }
        }
    }
    console.log(products[i] + ' ' + kiekis + ' ' + (suma * kiekis));
}

//DEDAM I LENTYNAS
localStorage.setItem('Mano lentyna111', JSON.stringify(saskaitos));
//BANDOM PASIIMTI IS LENTYNU
console.log(JSON.parse(localStorage.getItem('Mano lentyna111')));

//DEDAM I LENTYNAS
localStorage.setItem('Mano1', JSON.stringify(products));
//BANDOM PASIIMTI IS LENTYNU
console.log(JSON.parse(localStorage.getItem('Mano1')));

//DEDAM I LENTYNAS
localStorage.setItem('Mano2', JSON.stringify(grandTotal));
//BANDOM PASIIMTI IS LENTYNU
console.log(JSON.parse(localStorage.getItem('Mano2')));

/*Duomenų struktūros


const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];
 

Sukurti 100 sąskaitų masyvą.

Kiekviena sąskaita yra objektas ir turi po 5 savybes:
number: pagal taisykle INV001, INV002, … INV099, INV100;
products: masyvas random ilgio nuo 1 iki 10;
products masyvo elementai objektai, turintys po 4 savybes:
title: random iš products masyvo (vienoje sąskaitoje gali būti keli vienodi produktai. Vistiek jų kainos bus skirtingos); 
price: random skaičius su kableliu nuo 1.00 iki 100.00; 
amount: random skaičius nuo 1 iki 20;
total:  price ir amount sandauga.
total: visų products masyvo elementų total suma
vat: 21% nuo total
grandTotal: vat ir total suma


Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą, produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.

Pvz: 
Dviratis 35 479.55
Triratis 10 457.22
…..
Medinė dėžė 47 1025.74
 */