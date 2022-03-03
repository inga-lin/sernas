function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('labas');

const array = [5,9,6,3,7,9,3,9,7,0,0,7];

//array.sort(function(a, b){return a - b});// rusiuoja nuo maziausio iki didziausio

//console.log(array);

//array.sort(function(a, b){return b - a});//rusiuoja nuo didziausio iki maziausio

//console.log(array);

const rusiuotuvas = (function(a, b) {return a - b});

array.sort(rusiuotuvas);

console.log(array);

console.log('-----------');
//DOM //vieno elemento selektinimas

const rabbit = document.querySelector('h1')//per ka ir kur ieskom ir ko
rabbit.style.color = 'yellow';// padaro raides geltonai

// css: background-color o JS backgroundColor
rabbit.style.backgroundColor = 'blue'//fona padaro geltona
console.log(rabbit);

const barsukas = document.querySelector('h2 + h2'); //surandam antra h2 selektoriu
barsukas.style.color = 'brown'

console.log('-----------');
//vienodu elemento selektinimas
const li = document.querySelectorAll('li'); 
const ul = document.querySelectorAll('ul'); 

console.log(li);

for (let i = 0; i < li.length; i++){//padarom kad visi li elementai butu roziniai
    li[i].style.color = 'pink';

}
//cia tas pats kas foras(virsuje) tik kruciau uzrasoma(darbinantis taip reiktu rasyti)
li.forEach(element => element.style.color = 'red');//cia paimam po viena li elementa ir jam pritaiko spalva ir tai daro kol visiems pritaiko spalvas

//cia antras variantas
/*li.forEach((element, i) => {
    element.style.color = 'pink';
    console.log(element.innerText, i);
});*/

console.log(ul.children);

//console.log(ul.children);
//ul.children.forEach( a => a)neveikia 
//li.style.color = 'brown'

const animalList = document.querySelectorAll('.animal-list  h2')
animalList.forEach(element => element.style.color = 'pink');

/*
const animalListH = document.querySelectorAll('.animal-list > h2')
animalListH.forEach((element, i) => {
    element.style.color = 'blue';
    console.log();*/

    animalList.forEach((element, i) => {
        if (i % 2){
            element.style.color = 'yellow';
        } else {
            element.style.color = 'blue'
        }
        // element.style.color = i % 2 ? 'yellow' : 'blue'; 
    });