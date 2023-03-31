//untuk menampilkan hasil di javaScript terdapat tiga metode yaitu : alert(), prompt(), dan console.log()
document.writeln("haloo"); //bisa juga gini
let namaku = "Billy";
alert(namaku); //ini kek pop up gitu
alert("halo namaku adalah " + namaku);
alert(`halo, namaku adalah ${namaku}`); //sama aja dengan + variabel, tapi jika terdapat banya variabel yg mau ditampilin masa iya mau pake "" + terus, kan ga keren

prompt("masukkan namamu : "); //prompt ini sama kaya scanner di java, untuk menyimpan hasil inputan user
//misal gini
let inputNama = prompt("masukkan Nama : ");
alert(`Oke, namamu adalah ${inputNama}`);

console.log(inputNama); //ini tampilnya di console, klik kanan inspec element => console.