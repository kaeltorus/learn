var penumpang = [
  "mikhael",
  "sitorus",
  undefined,
  "diana",
  "rosari",
  "rambu",
  "kadunga",
];

var penumpangNaik = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    //  telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        //tambahkan penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        console.log(namaPenumpang + " telah naik");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada didalam angkot");
        //kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        //tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var penumpangTurun = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tampilkan, pesan bahwa angkot kosong
    console.log(" Angkot tidak ada penumpang ");
    //kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    //  telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika penumpang turun
      if (penumpang[i] == namaPenumpang) {
        //kosongkan penumpang di kursi tersebut
        penumpang[i] = undefined;
        console.log(namaPenumpang + " telah turun");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika tidak ada nama yang sama
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " tidak ada didalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      // else if (i == penumpang.length - 1) {
      //tambah penumpang di akhir array
      // penumpang.push(namaPenumpang);
      //kembalikan isi array & keluar dari function
      // return penumpang;
      // }
    }
  }
};

// // var listPenumpang = function () {
// for (var i = 0; i < penumpang.length; i++) {
//   console.log("Penumpang ke-" + i + " adalah " + penumpang[i]);
//   //     return;
// }
// // };
