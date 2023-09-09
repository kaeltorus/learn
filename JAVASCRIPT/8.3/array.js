// forEach

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["mikhael", "sitorus", "pane"];

// ancient ways

// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// forEach ways

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// map
// map digunakan untuk mengembalikan array
// var angka2 = [1, 2, 5, 7, 9, 3, 4, 8];
// var angka3 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka3.join(" - "));

// sort
// variabel.sort(); hanya mengurutkan dari karakter pertama
// untuk mengurutkan keseluruhan nilai harus menambahkan function perbandingan angka.
var angka4 = ["mikhael", "sitorus", "diana", "rosari"];

console.log(" sebelum urut versi 1");
console.log(angka4.join(" - "));
console.log(" sesudah urut urut versi 1");
angka4.sort();
console.log(angka4.join(" - "));

var angka5 = [1, 4, 5, 3, 2, 6, 8, 7, 9, 10, 80, 20];
console.log(" sebelum urut versi 2");
angka5.sort();
console.log(angka5.join(" - "));
console.log(" sesudah urut urut versi 2");
angka5.sort(function (a, b) {
  return a - b;
});
console.log(angka5.join(" - "));
