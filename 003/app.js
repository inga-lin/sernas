console.log('kukis');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('---1uzduotis-----');
//stebesim bb
const bb = document.querySelector('#bb');
console.log(bb);

//pridesim stebetoja (.addEventListener) ir ka stebimas oblektas turi padaryti'click'
bb.addEventListener('click', e => {//ka mes norime tame objekte stebeti('click')(https://developer.mozilla.org/en-US/docs/Web/Events), antras ka norim daryti su clicu
    e.stopPropagation(); // evento stabdymas
    console.log('Valio!!!');
});

//pridesim stebetoja (.addEventListener) ir ka mes norime tame objekte stebeti('mouseover')
bb.addEventListener('mouseover', () => {//ka mes norime tame objekte stebeti('mouseover')
    console.log('pele ateina spasuti mygtuko');// antras ka norim daryti su ''mouseover'' kad pasakytu pele ateina spasuti mygtuko
});

bb.addEventListener('mouseout', () => {//ka mes norime tame objekte stebeti('mouseout'),
    console.log('pele iseina ');// antras ka norim daryti su 'mouseout' kad pasakytu pele iseina
});



/*
console.log('---2uzduotis-----');
//stebesim .animal-list h2
const list = document.querySelectorAll('.animal-list h2');
//paimam is listo kiekviena nari ir su juo ka nors padarom
list.forEach(animal => {
    animal.addEventListener('click', () =>{//ka mes norime tame objekte stebeti('click')
        console.log('valio!!', animal.innerText);//cia suzinam ant kurio gyvuno sakom valio(animal.innerText)
    });
    animal.addEventListener('mouseover', () =>{//ka mes norime tame objekte stebeti('mouseover')
        console.log(animal.innerText ,'pele ateina spasuti mygtuko');// antras ka norim daryti su 'mouseover' kad pasakytu pele ateina spasuti mygtuko ir pridedam animal.innerText ir tai nurodo koks tan gyvunas(galima keisti juos vietomis)
    });
    
    animal.addEventListener('mouseout', () =>{//ka mes norime tame objekte stebeti('mouseout')
        console.log('pele iseina ', animal.innerText);// antras ka norim daryti su 'mouseout' kad pasakytu pele iseina ir pridedam animal.innerText ir tai nurodo koks tan gyvunas
    });

});
console.log(list);*/

console.log('---2uzduotis patobulinta su e.target-----');
const list = document.querySelectorAll('.animal-list h2');
//e-yra oblektas(eventas)
//e.target- is e(evento) pasiimam per .target kuris iskviete sita iviki ir konsoleje pamatom tarkim <h2>Bebtas</h2>(e.target naudojam kartu)
list.forEach(animal => {
    animal.addEventListener('click', e => {//ka mes norime tame objekte stebeti('click')
        console.log(e.target.innerText, 'Valio!!!');//cia suzinam ant kurio gyvuno sakom valio(animal.innerText) ir nurodom kad console atspauzdintu ta elementa <h2>bebras</h2>
        console.log(e.target);//tai yra tas elienentas del kurio ivyko tas ivikis
    });

    animal.addEventListener('mouseover', () => {//ka mes norime tame objekte stebeti('mouseover')
        console.log(animal.innerText, 'Pelė ateina spausti mygtuko');
    });
    
    animal.addEventListener('mouseout', () => {//ka mes norime tame objekte stebeti('mouseout')
        console.log('pele iseina ', animal.innerText);
    });
});


console.log('---3uzduotis-----');
//e(iviko) stabdymas
const bd = document.querySelector('.bd');
/*bb.addEventListener('click', e => {
    e.stopPropagation(); // evento stabdymas (jei norim kad vaika paspaustu tevas nesikeistu reik stabdyma uzdeti ant vaiko)
    console.log('Valio!!!');
});*/
bd.addEventListener('click', () => {//ka mes norime tame objekte stebeti('click')
    bd.style.backgroundColor = 'red';
    
});
//e.stopPropagation() sustabdom kad paspaudus mygtuka jo tevo spalva nepasikeistu. ji turim panaudot ant mygtuko

console.log('---4uzduotis-----');
//kaip patiems pasigaminti elementa naudojant JS
//dinamiskas kurimas
//duok-koda surandam kur ta koda norim deti(jis matysis puslapyje o ne index.html) 1variantas(lengvas mums bet sunkus JS)
const kodas1 = document.querySelector('#duok-koda');//kurioje index.html vietoje ji idedam
const html = ` 
<h2>
    <i> 
        Vovere 
    </i>
</h2>
`;//``su ju pagalba galim koda isskirstyti per eilutes, be ju turetu buti tik vienoje eiluteje

kodas1.innerHTML = html;//iterpiam vovere i koda

console.log('---4uzduotis 2variantas-----');
//2variantas sunkus mums bet lengvas JS (ji naudojam dedeliose puslapuose)

const kodas2 = document.querySelector('#duok-dar-koda');//kurioje vietoje desim

const h2 = document.createElement('h2');//1.dokumente sukuriam ( su .createElement)h2elementa
const vovere = document.createTextNode('Vovere')//2.cia kuriam elemento teksta
//3.dabar reik vovere ideti i h2 elementa(consoleje matysim)
h2.appendChild(vovere);

//4.dabar reikia ji ikisti i index.html
kodas2.appendChild(h2)

//kodas1.appendChild(h2); jei taip parasysim tai is kodas2 atemam vovere ir ja idedam prie kodo1ir visriek gausim 2voveres tai matom consoleje

console.log(h2, vovere);// cia consoleje matysim juos


console.log('---5uzduotis-----');
//informacija is narsykles
//kaip pasiimti zmogaus teksta sau

const i1 = document.querySelector('#i1');

i1.addEventListener('input', () => {
    console.log(i1.value); // cia matysim ka zmogus raso realiu laiku
})

//2 event panaudojimas nuskaitymo informacijos is inputo
const bb1 = document.querySelector('#bb1');

bb1.addEventListener('click', () => {
    console.log('Enter: ' + i1.value);//kai paspaudziu mygtuka nuskaitau informacija ka zmogus parase
    console.log('Enter: ' + i2.value);
})



//selekto veikimas
const i2 = document.querySelector('#i2');

i2.addEventListener('change', () => { //'change' fiksuojam kada pasikeite reiksme
    console.log(i2.value); // cia maatom kada mygtukas pasikeite del 'change'
});


console.log('---6uzduotis-----');
//sudetingesnis chek bokc
const ch = document.querySelectorAll('[type=checkbox]');//paimam visus checkbox

const bb2 = document.querySelector('#bb2');// susirandam button

bb2.addEventListener('click', () => {// kai paspaudziam button kas turi ivykti
    const c = []; //cia idesim visa informacija is suzymetu checkbox

    ch.forEach(checkbox => { //einam per visus ch
        if (checkbox.checked) {// jeigu chechox yra pacekintas(pazymetas)
            c.push(checkbox.value);//supusinu jo reiksme je jis pazymetas
        }
    })
    console.log(c);// matysis konsoleje ka pazymejom checkbox
});
console.log(ch);
