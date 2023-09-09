// membuat oboject

// cara 1 - biasa / function declaration
function halo() {
  console.log("hallo");
}

// halo();
// this di function declaration mengembalikan object global

// cara 2 - object  literal
var obj = {};
obj.halo2 = function () {
  console.log("haloo2");
};
// obj.halo2();
// this di object literal mengembalaikan object beserta semua isi properti nya dan methodnya

// cara 3 - constructor
function Halo() {
  console.log("Halo3");
}

// new Halo();
// this di constructor berguna untuk mengembalikan object instan yang baru dibuat

// this
// console.log(this);

// var a = "mikhael";

// console.log(a);
// console.log(window.a);
// console.log(this.a);

// cara 1- this declaration

function halo() {
  console.log(this);
  console.log("halo");
}

this.halo();

// cara 2 - this object  literal
var obj = { a: 10, nama: "mekel" };
obj.halo2 = function () {
  console.log(this);
  console.log("haloo2");
};
obj.halo2();

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("Halo3");
}

new Halo();

var obj1 = new Halo();
var obj2 = new Halo();
