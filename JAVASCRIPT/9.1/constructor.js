function Mahasiswa(nama, umur, face) {
  this.nama = nama;
  this.umur = umur;
  this.face = face;
}

// biasakan menulis nama objek constructor dengan huruf besar

var mhs = new Mahasiswa("mekel", 23, "ganteng");
// yang membedakan constructor dengan declaration adalah variabel sudah dibuatkan secara default oleh constructor dan harus menggunakan
// new
// constructor tanpa new akan menjadi undefined
