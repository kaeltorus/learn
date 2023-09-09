// cara membuat boject pada javascript

// 1 Object Literal
// let pegawaiLiteral = {
//   nama: "mikhael",
//   duit: 0,

//   kerja: function (gajian) {
//     this.duit = this.duit + gajian;
//     atau;
//     this.duit += gajian;
//     console.log(`Halo ${this.nama},  gaji bulanan mu sudah masuk`);
//   },
// };

// kalau membuat pegawai ke dua maka harus membuat  objek baru tidak boleh dengan nama objek yang sama
// problem: tidak efektif untuk objek yang banyak

// 2 Function Declaration
// problem solved
// dengan membuat objek declaration keuntungannya kita tidak perlu membuat objek banyak banyak cukup 1 template saja

const methodPegawai = {
  kerja: function (gajian) {
    this.duit += gajian;
    console.log(`Halo ${this.nama},  gaji bulanan mu sudah masuk`);
  },

  perjalananDinas: function (honor) {
    this.duit += honor;
    console.log(
      `Halo ${this.nama},  Honor perjalanan dinas mu sudah di reimburse`
    );
  },
  bayarPajak: function (pajak) {
    this.duit -= pajak;
    console.log(`Halo ${this.nama},  Pajak mu sudah di bayar`);
  },

  healing: function (main) {
    this.duit -= main;
    console.log(`Halo ${this.nama},  kamu sudah waktunya healing`);
  },
};

function PegawaiDeclaration(nama, duit) {
  //   let pegawai = {};
  let pegawai = Object.create(methodPegawai);
  pegawai.nama = nama;
  pegawai.duit = duit;
  //   pegawai.kerja = methodPegawai.kerja;
  //   pegawai.perjalananDinas = methodPegawai.perjalananDinas;
  //   pegawai.pajak = methodPegawai.bayarPajak;
  // diubah menggunakan Object.create

  return pegawai;
}

let mikhael = PegawaiDeclaration("Mikhael", 0);
let sitorus = PegawaiDeclaration("Sitorus", 0);

// tapi 2 method yg ada honor dan pajak memakan memori walaupun tidak di pakai disistem

// 3 Constructor Function
// function PegawaiConstructor(nama, duit) {
//   this.nama = nama;
//   this.duit = duit;

//   this.kerja = function (gajian) {
//     this.duit += gajian;
//     console.log(`Halo ${this.nama},  gaji bulanan mu sudah masuk`);
//   };

//   this.perjalananDinas = function (honor) {
//     this.duit += honor;
//     console.log(
//       `Halo ${this.nama},  Honor perjalanan dinas mu sudah di reimburse`
//     );
//   };

//   this.bayarPajak = function (pajak) {
//     this.duit -= pajak;
//     console.log(`Halo ${this.nama},  Pajak mu sudah di bayar`);
//   };
// }

// let mikhael = new PegawaiConstructor("Mikhael", 0);

// 4 Object.create
