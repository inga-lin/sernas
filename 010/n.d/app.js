console.log('ta');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*1.Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(),
kuris sukuria naują Marsas objektą, turintį dvi savybes id:
rand 100000 - 999999 ir pavadinimas: pagal taisyklę 
iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”. 
Metodas grąžina Marsas objektą. Metodą iškvietus trečią, 
ketvirtą ir t.t. kartus, metodas turi nekurti daugiau naujų
Marsas objektų, o grąžinti atsitiktine tvarka, vieną iš 
dviejų jau sukurtų Marsas objektų. Tarkim penkis kartus
iškvietus metodą, turime matyti tik du skirtingus objektus 
(žiūrim pagal id).*/

class Marsas {
    static pridetiPalydovą(){
        this.id = rand(100000, 999999);
        //this.pavadinimas = r;
        
    }

}

const d = new Marsas('Deimas');//2
const f = new Marsas('Fobas');//2
//Marsas.pridetiPalydovą();
//Marsas.pridetiPalydovą();
console.log(Marsas.pridetiPalydovą);
console.log(f);
/*2.Sukurti klasę Puodelis. Puodelis turi dvi savybes: 
spalva ir ipilta. Sukurti statinį metodą gamintiPuodelius(), 
kuris pagamina du objektus su savybių reikšmėm: “raudonas”, 
“pilnas” ir “geltonas”, “tuščias”. Sukurti statinį metodą 
perpilti(), kuris “pilną” puodelį padaro tuščią ir atvirkščiai. 
Sukurti statinį metodus ispiltiViska(), kuris abu puodelius 
padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro 
“pilnus”. Po šių metodų iškvietimo, metodas perpilti() turi 
veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”).*/

/*3.Sukurti klasę Taskas, kuris turi savybę taskas 
rand 100-999. Sukurti klasę Taskai, kuris turi savybe 
taskai, kuri yra masyvas iš 10 Taskas objektų. Sukurkite 
išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, 
kuris yra masyvas iš 10 elementų, o kiekvienas elementas yra 
Taskai objektas. Išrūšiuokite masyvą daugTasku, pagal taskų 
sumą nuo didžiausio iki mažiausio.*/

/*4.Sukurti klasę Div. Sukūrus naują objektą iš šios klasės 
HTML’e turi atsirasti naujas <div> tagas su rand 1000 - 9999 
skaičiumi viduje. Sukurti metodą spalva(color), kuris keistų 
to <div> tago spalvą. Taip pat statinį metodą visuSpalva(color), 
kuris keistų visų <div> tagų, sukurtų per klasę, spalvą.*/

/*5.Sukurti klasę Post. Kuriant objektą iš šios klasės, 
reikia įrašyti id savybę, pasirinktinai nuo 1 iki 100. 
Objektas turi turėti visas savybes gautas iš serverio adresu:
https://jsonplaceholder.typicode.com/posts/1 (objektas su id: 1).*/