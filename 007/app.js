console.log('masyvassss');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//siusti recvesta i serveri
fetch('https://jsonplaceholder.typicode.com/posts/81') //GET metodas sitam url. narsykle kreipesi i ta adresa
  .then(response => response.json()) //.then - atsakymo laukimas. JS asinkronizmas
  .then(data => {     // .then laukiam kol bus apdorotas atsakymas
    console.log('----------',data); ///data yra objektas
    //kodas
    console.log('labas');


}); 


//Gauti kokio nors posto informaciją. Title įrašyti į h1 tagą, o body turinį įrašyti į p tagą. DONE!

//destytojo
const h1 = document.querySelector ('h1');
const p = document.querySelector('p');

fetch('https://jsonplaceholder.typicode.com/posts/11') //GET metodas sitam url. narsykle kreipesi i ta adresa
  .then(response => response.json()) //.then - atsakymo laukimas. JS asinkronizmas
  .then(data => {     // .then laukiam kol bus apdorotas atsakymas
    console.log('----------',data); ///data yra objektas
    //kodas

    h1.innerText = data.title; //idedam ta ka gaunam is title
    p.innerText = data.body; ////idedam ta ka gaunam is body




}); 