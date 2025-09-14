let s = "Ez egy szöveg";
s = 'Ez egy \"szöveg\"';

let hosszu = `Ez egy 
nagyon hosszú 
szövegecske
lett`;//Több soros stringek a backstickkel 

// a stringek valójában tömbök
console.log(s[5]);
s[5] = "C";   //readonly elemekt a string karakterei
console.log(s[5]);

//DE, vannak beépített függvények
console.log(s.substring(0, 7));//Az első hét karaktert kiírja stringből, a két szám a két index között távolság ahonnan visszaadja a  szöveget
s = s.substring(0, 5) + "C" + s.substring(6);//Összeraktuk a substringekkel egy újabb stringet, az első öt karakter, majd a következő hat karakterrel és közé egy C betűt ékelve

console.log(s);
console.log(`A szöveg hossza ${s.length} karakter`);

console.log(s.at(-3));//működik negatívval is és a szó elején lévő karaktereket adja vissza
console.log(typeof(s.charAt(89)))//semmi stringet kapunk
console.log(s.charAt(4));//az adott indexen lévő karaktert mondja meg
//negatív számokkal is üres stringet kapunk vissza

//visszatérése true vagy false keresés
console.log(s.includes("egy"));
console.log(s.includes("a"));

//Nagybetű kisbetű
console.log(s.toLocaleLowerCase());
console.log(s.toUpperCase());


let user = "      terikeneni28    ";
let user1 = "      terike  neni2 8    ";
console.log(user);
console.log(user1);
console.log(user.trim());//trimmel az összes üres helyet ami a stringünk előtt és mögött volt kitörölhetjük

let d = new Date();//Date osztály konstruktora
let h = d.getHours();//lekértük az órát
let m = d.getMinutes();//a percet
let sec = d.getSeconds();// a másodpercet


function timeModify(t){//idő kiirást alakítjuk, a padStarttal, ha a bármelyik idő rész egy jegyű nullát írunk elé ezzel a függvénnyel
    return (t+"").padStart(2, '0');
}
console.log(`${timeModify(h)}:${timeModify(m)}:${timeModify(sec)}`);//az időkiíratása módosítva
console.log(d);

console.log(s.replace('e', "a"))//kicseréltük az e betűt egy a-val
console.log(s.replaceAll("e", "a"));//kicseréli az összes e betűt a betűre
console.log(s.indexOf("C"))//Visszaadja a megadott stringnek az indexét, amely abban a stringben amire meghívtuk a függvényt


const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
function helykitolto(value){//alapból, pedig ha van benne lebegőpont akkor, az egészeknél két darab nullát írunk az adott szám végéhez
    if(value.indexOf('.') >= 0){
        let tort = value.substring(value.indexOf('.')+1);//kiválasztjuk a lebegő pont utáni számokat
        tort = tort.padEnd(2, '0');//két tizedes jegyre rakjuk a számot
        value = value.substring(0, value.indexOf('.') + 1) + tort;//összrakja a számot úgyhogy két tizedes jegyre legyen kerekítve

        
    }
    else{//alapból pedig ha nincs benne pont akkor a szám végére két darab nullát írunk(az egész miatt)
        value += ".00";
    }
    return value;//majd a végén visszaadjuk a számot
}
const vagottelemessorok = jellemzok;
let vagottelemsor = "";
for(let i = 0; i < vagottelemessorok.length; i++){//végigmegyünk a tömbön és spliteljük a stringeket pontosvessző alapján majd kiírjuk consolera formázva
    vagottelemsor = vagottelemessorok[i].split(";");
    
    console.log(`Név: ${vagottelemsor[0]}, Magasság: ${helykitolto(vagottelemsor[1])} cm, Súly: ${helykitolto(vagottelemsor[2])} kg `)
}


