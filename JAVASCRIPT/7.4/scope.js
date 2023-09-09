//this is global scope / window scope
var a = 1;

function test() {
  var b = 2;
  c = 3;
  console.log(b);
  console.log(window.a);
}

test();
console.log(c);
