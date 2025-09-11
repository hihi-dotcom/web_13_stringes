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