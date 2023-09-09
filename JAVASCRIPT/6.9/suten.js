var tanya = true;
while (tanya ){
    // menerima pilihan player
var player = prompt ('pilih : gajah, semut, orang');

// menerima pilihan komputer

// membuat bilangan random
var komputer = Math.random();

if (komputer < 0.34){
    komputer = 'gajah';
} else if(komputer >=0.34 && komputer < 0.67){
    komputer = 'orang';
} else{
    komputer = 'semut';
}

var hasil ='';
// menentukan rules
if(player == komputer){
    hasil = 'SERI'
}else if (player== 'gajah'){
    // if(komputer == 'orang'){
    //     hasil = 'MENANG';
    // }else{
    //     hasil = 'KALAH';
    // }
    hasil = (komputer == 'orang') ? 'MENANG' : 'KALAH';
}else if (player== 'semut'){
    // if(komputer == 'gajah'){
    //     hasil = 'MENANG';
    // }else{
    //     hasil = 'KALAH';
    // }
    hasil = (komputer == 'gajah') ? 'MENANG' : 'KALAH';
}else if (player== 'orang'){
    // if(komputer == 'gajah'){
    //     hasil = 'KALAH';
    // }else{
    //     hasil = 'MENANG';
    // }
    hasil = (komputer == 'semut') ? 'MENANG' : 'KALAH';
}else{
    hasil = " Pilihan " +player+ " tidak ada dalam game";
}

// hasil
alert('Kamu memilihi : '+ player +' melawan '+komputer+ ' sehingga hasilnya \n'+hasil);

tanya = confirm('lagi ga ?');
}

alert('permainan selesai');