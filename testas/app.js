/*function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/

/*TarpinisOOPuždavinysSukurti klasęVaisius, kuris turi:savybędydisrand 5 - 25;
savybęidrand 1000000 - 9999999savybęprakastasfalseSukurti metodąprakasti(), 
kuris savybe prakastaskeistų į true.SukurtiklasęKrepšys,kurituristatinęsavybevaisiai,
kuriyra masyvas.KlasėjeKrepšyssukurkitestatinįmetodąpripildyti(),kurissavybęvaisiaiužpildytų20-
timiVaisiusobjektųirišrūšiuotųjuospagalvaisiausdydįnuodidžiausioikimažiausio.
KlasėjeKrepšyssukurtistatinįmetodąisimti(),kurisišvaisiaimasyvoišimtų(ištrintųišmasyvo)
pirmą(didžiausią)vaisiųirjįgrąžintų.Išėmustarkimkelisvaisiusirvėlpaleidusmetodąpapildyti(),
jisturipadarytitaikąsakometodopavadinimas-papildytiikipilno(20elementų),
oneperrašytivisusvaisiusišnaujo(taigalimastebėtipagalvaisių id).Išorėje(globale)
sukurtikintamąjįgrauztukaikurisyraMaptipoobjektas.Iškrepšelioišimtivaisiaituribūtipridedamiįšįobjektą.
KaipraiktusnaudotiVaisiusobjektoidsavybę.Priešpatalpinantvaisiųįgrauztukaiobjektą,
vaisiusturibūti“prakąstas”,Vaisiusobjekte paleidžiantprakasti()metodą.*/

class Vaisius {
    constructor(){
        this.dydis = this.rand(5,25);
        this.id = this.rand(1000000,9999999);
        this.prakastas = false;
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    prakasti(){
        this.prakastas = true;
    }
}

class Krepsys{
    static vaisiai = []; //statinęsavybevaisiai
    
    static pripildyti(){ //statinįmetodąpripildyti()
        do{
           this.vaisiai.push(new Vaisius()); // paimam Vaisiaus objekta ir supusinam i vaisiai masyvas
        }
        while(this.vaisiai.length < 20) //cia gaunam 20 objektu Vaisius
        this.vaisiai.sort((a,b) => b.dydis - a.dydis); //cia isrusiuojam nuo didziausio iki maziausio

    }

    static isimti(){
        const v = this.vaisiai.shift();//isimam didziausia vaisiu
        console.log('isimtas vaisius',v);
        return v;
    }



}

Krepsys.pripildyti();
console.log(Krepsys.vaisiai);

const grauztukai = new Map();
function grauzti(x){
    x.prakasti();
    grauztukai.set(x.id, x);
}
grauzti(Krepsys.isimti());
grauzti(Krepsys.isimti());
grauzti(Krepsys.isimti());
console.log('grauztukai',grauztukai);

//Krepsys.pripildyti();
console.log(Krepsys.vaisiai);