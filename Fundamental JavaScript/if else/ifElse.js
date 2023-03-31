//if else itu ya percabangan, intinya wajib bgt dipahami
let billy = true;
let kamu = false;

if (billy) {
  //billy kan true, yauda yg di eksekusi yg ini
  console.log("oke, namamu Billy");
} else {
  //dan jika di kondisi bukan masukin billy, tapi bukanBilly, maka yg dieksekusi yg ini
  console.log("bukan billy");
}
bidsbfuksabdbss;
//else if
let b = "Bangun";
let t = "Tidur";
let m = "Mandi";
let english;

if (b === "Bola") {
  english = "Ball";
} else if (t === "Tidur") {
  //yg di eksekusi yg ini, soalnya t itu nilainya Tidur
  english = "Sleep";
} else if (m === "Mobil") {
  english = "car";
}
console.log(english); //kan variabel english awalnya tidak ada nilainya, stelah di else if english itu diisi sleep, trs english ditampilin, yauda brati outputnya sleep, kek gituuu

//? : true
//: : false
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

//contoh lainnya ni
let name = "";

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log("Nama masih kosong"); //yg dieksekusi, karna nilai di variable nama itu gaada
}
