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