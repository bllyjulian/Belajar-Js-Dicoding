//Tipe data yang umum digunakan itu ada : undefinied, numbers, string, boolean, null;
//typeof() digunakan untuk mengecek tipe data
let name1; // tipe data undefinied karna aku ga ngasi nilai ke variabel itu
console.log(name1); //output nya ya bakal ada kata undefinied

let num1, num2; //tipe data angka ya angka wkwk
num1 = 34;
num2 = 43;
console.log(typeof num2); // brati cek tipe data di variabel num2
console.log(num1);
console.log(num1++); //++ nya di belakang artinya sesudah ini, next nya baru di tambah
console.log(num1); //maka outputnya bakal 35
console.log(++num2); //++ di depan artinya lgsg ditambah gitu

let jumlah = num1 + num2; //bisa juga di operasikan, disini aku ngasi contoh satu aja
console.log(jumlah);

//tipe data string, "" '' sama aja tergantung kalimat di dalamnya
const info = "aku belajar javascript di dicoding";
console.log(info);
const contohtandapetik = '"Kamu nanya?" iya';
console.log(contohtandapetik);
/*const contohLagi = '"I think it's awesome!" he answered confidently'
    console.log(contohLagi); */ //error karna "ds'ds" gituda
const ygBnergini = '"I think it\'s awesome!" he answered confidently';
console.log(ygBnergini);
console.log(info + " " + ygBnergini); // bisa juga ditambah
let billy;
billy = info + " " + contohtandapetik + ygBnergini; // bisa juga di tampung di variabel dlu baru dipanggil
console.log(billy);

const namaku = "Billy Ganteng";
console.log(`halo aku ${namaku}`); //bisa juga di panggil lgsg, make `` gini

//tipe data boolean
let b = true;
let d = false;

console.log(b);

let lebihKecilDari = 2 < 7; //true
let lebihBesarDari = 1 > 3; //false

console.log(lebihKecilDari);
console.log(lebihBesarDari);

//tipe data null;
let kosong = null;
console.log(kosong);
