let s = "Ez egy szöveg";
s = 'Ez egy \"szöveg\"';

let hosszu = `Ez egy 
nagyon hosszú 
szövegecske
lett`;

// a stringek valójában tömbök
console.log(s[5]);
s[5] = "C";   //readonly elemekt a string karakterei
console.log(s[5]);

//DE, vannak beépített függvények
console.log(s.substring(0, 7));
s = s.substring(0, 5) + "C" + s.substring(6);
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
console.log(user.trim());

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let sec = d.getSeconds();


function timeModify(t){
    return (t+"").padStart(2, '0');
}
console.log(`${timeModify(h)}: ${timeModify(m)}: ${timeModify(sec)}`);

console.log(s.replace('e', "a"))
console.log(s.replaceAll("e", "a"));
console.log(s.indexOf("C")) 

const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
function helykitolto(value){
    if(value.indexOf('.') >= 0){
        let tort = value.substring(value.indexOf('.')+1);
        tort = tort.padEnd(2, '0');
        value = value.substring(0, value.indexOf('.') + 1) + tort;

        
    }
    else{
        value += ".00";
    }
    return value;
}
const vagottelemessorok = jellemzok;
let vagottelemsor = "";
for(let i = 0; i < vagottelemessorok.length; i++){
    vagottelemsor = vagottelemessorok[i].split(";");
    
    console.log(`Név: ${vagottelemsor[0]}, Magasság: ${helykitolto(vagottelemsor[1])} cm, Súly: ${helykitolto(vagottelemsor[2])} kg `)
}


