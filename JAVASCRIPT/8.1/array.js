console.log("array sederhana");
var array = ["mikhael", 2000, true];
console.log(array);

console.log("menambah isi array manual");
var array2 = [];
array2[0] = "index0";
array2[1] = "index1";
array2[2] = "index2";
array2[3] = "index3";

console.log(array2[3]);

console.log("menghapus isi array manual");
var array3 = ["mikhael", 2000, true];

array3[1] = undefined;
console.log(array3);

var array3 = ["mikhael", 2000, true];

for (var i = 0; i < array.length; i++) {
  console.log("isi array index ke-" + [i + 1] + " " + array3[i]);
}

console.log("Method pada array");
console.log("Join");
console.log("Menggabungkan seluruh isi array menjadi string");
var array4 = ["mikhael", 2000, true];
console.log(array4.join(" ~ "));
panjang = array4.join(" ~ ").length;
console.log(panjang);

console.log("Push & Pop");
console.log("Push untuk menambah beberapa elemen dibagian belakang");
console.log("Pop untuk menghapus elemen terakhir");

var array4 = ["mikhael", 2000, true];
array4.push("Sitorus");
// array4.pop();

console.log(array4);

console.log("Unshift dan shift");
console.log("sama dengan push & pop namun berjalan di elemen awal");
var array5 = ["mikhael", 2000, true];
array5.unshift("Sitorus");
// array5.shift();
console.log(array5.join(" ~ "));
