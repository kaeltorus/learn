var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log(' Angkot No.'+noAngkot+' sedang beroperasi');
    noAngkot++;
}
for( noAngkot = angkotBeroperasi +1; noAngkot <= jumlahAngkot; noAngkot++){
    console.log('Angkot no.'+noAngkot+' sedang tidak beroperasi');
}