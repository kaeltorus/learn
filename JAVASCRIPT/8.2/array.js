console.log("THIS IS SPLICE");
var array5 = ["mikhael", "2000", "true"];

array5.splice(2, 0, "mekul");
// mulai dari indeks ke 2, di hapus sebanyak 0 di tambah elemen baru " mekul "
console.log(array5.join(" ~ "));

console.log("THIS IS SLICE");

var array6 = [
  "mikhael",
  "2000",
  "true",
  "diana",
  "rosari",
  "rambu",
  "kadunga",
  "2003",
  "true",
];
var arrayBaru = array6.slice(3, 7);

console.log(arrayBaru.join(" ~ "));
// slice menghasilkan array baru
// indeks 0,1,2,3,4,5,6,7,8,9
// akan mengambil data mulai dari indeks ke 3 sampai ke indeks 7 kedalam array baru
