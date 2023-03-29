//switch itu hampir sama dengan if else tapi lebih kearah pencocokan, misal jika km pilih a, maka...
let b = "Bill";
let hasil;

switch (b) //b = Bill, jadi jika di case tidak ada Bill, maka otomatis yang dieksekusi yang default
 {
  case "Joy":
    hasil = "g cocok";
    break;
  case "Billy":
    hasil = "ini Aku";
    break;
  default: //misal udah gaada yg cocok nih
    hasil = "Tidak ada yg cocok";
}
console.log(hasil);
