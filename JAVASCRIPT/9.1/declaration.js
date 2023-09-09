function buatObjectMahasiswa(nama, umur, face) {
  var mhs = {};

  mhs.nama = nama;
  mhs.umur = umur;
  mhs.face = face;
  return mhs;
}

var mahasiswa = buatObjectMahasiswa("mekel", 23, "ganteng");

// cara panggil
// mahasiswa;

// kelebihan declaration lebih ringkas dari pada literal karena cukup kita deklarasi sekali
// objeknya bisa dibuat berulang ulang
