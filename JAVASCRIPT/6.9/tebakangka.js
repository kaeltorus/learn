var mainLagi = true;
while (mainLagi) {
  komputer = Math.floor(Math.random() * 10);

  //rules
  for (var i = 3; i > 0; i--) {
    player = prompt(
      "Kamu punya " + i + " kesempatan \n Coba tebak angka 1 ~ 10"
    );
    if (player > 10 || player < 0) {
      hasil = " angka yang di masukkan salah";
      alert(hasil);
    } else if (player == komputer) {
      hasil = "Angka Tebakan kamu BENAR " + komputer;
      alert(hasil);
      break;
    } else if (player > komputer) {
      hasil = "Angka " + player + " lebih rendah lagi";
      alert(hasil);
    } else if (player < komputer) {
      hasil = "Angka " + player + " lebih tinggi lagi";
      alert(hasil);
    }
  }

  mainLagi = confirm("main lagi ga?");
}

alert("Permainan selesai");
