function rand(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('hello');

/*1.Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log */
const mygtukas = document.querySelector('#enter');

mygtukas.addEventListener('input', () => {
    console.log(mygtukas.value); 
});
console.log(mygtukas);

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    console.log('Enter: ' + mygtukas.value);
    
});


/*2.Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log*/
const select = document.querySelector('#select');

select.addEventListener('change', () => { 
    console.log(select.value); 
});

/*3.Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
*/

const radio1 = document.querySelectorAll('[type=radio]');

radio1.addEventListener('change', () => { 
    console.log(radio1.value); 
});