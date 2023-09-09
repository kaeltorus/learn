// filter & find
var angka = [1, 4, 5, 3, 2, 6, 8, 7, 9, 10, 80, 20];
var angka2 = angka.filter(function (x) {
  return x > 5;
});

console.log(angka2.join(" - "));
console.log("---------------------------");
// filter bisa pake join karena dia array
// find tidak bisa karena bukan array
var angka3 = [1, 4, 5, 3, 2, 6, 8, 7, 9, 10, 80, 20];
var angka4 = angka3.find(function (x) {
  return x > 5;
});

console.log(angka4);
