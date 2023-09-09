var jumlahVolumeDuaKubus = function (a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
};

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 15));
// alert(jumlahVolumeDuaKubus(8, 3));
