function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //https://in3.dev/knygos/
  //https://in3.dev/knygos/types/

  //Reikia padaryti knygyno puslapį, gražiai viską išdėliojant html'e.
//Reikia padaryti add to favorite mygtuką.

//const img = document.querySelector ('img');
const h1 = document.querySelector ('h1');
const h3 = document.querySelector('h3');
const h5 = document.querySelector ('h5');
const p = document.querySelector('p');
//const knyguParduotuve = document.querySelector('#knyguParduotuve');

fetch('https://in3.dev/knygos/') //GET metodas sitam url. narsykle kreipesi i ta adresa
  .then(response => response.json()) //.then - atsakymo laukimas. JS asinkronizmas
  .then(data => {     // .then laukiam kol bus apdorotas atsakymas
    console.log('----------',data); ///data yra objektas
    //kodas
     //img.innerText = data.img;
     h1.innerText = data.title;
     //p.innerText = data.body;
     h3.innerText = data.author;
     h5.innerText = data.price;
     p.innerText = data.time;

    //let knygynas = "";
    //data.forEach((datai) => {
        //knygynas += 
        //const h1 = document.querySelector('h1');
        //const vovere = document.createTextNode(datai.title)
        //h1.appendChild(vovere);
       // knyguParduotuve.appendChild(h1)

        //const h3 = document.querySelector('h3');
        //const vo = document.createTextNode(datai.author)
       // h3.appendChild(vo);
       // knyguParduotuve.appendChild(h3)

        //const h5 = document.querySelector('h5');
       // const vov = document.createTextNode(datai.price)
      //  h5.appendChild(vov);
       // knyguParduotuve.appendChild(h5)

        //const p = document.querySelector('p');
        //const vove = document.createTextNode(datai.time)
       // p.appendChild(vove);
      //  knyguParduotuve.appendChild(p)
        
       

        //knyguParduotuve.innerHTML = knygynas;
   // });



}); 

//img
//title
//author
//price
//time
    //img.innerText = data.img;
   // h1.innerText = data.title;
    //p.innerText = data.body;//
    //h3.innerText = data.author;
   // h5.innerText = data.price;
    //p.innerText = data.time;