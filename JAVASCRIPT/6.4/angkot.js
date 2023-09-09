for( var noAngkot=1; noAngkot<=10; noAngkot++ ){
    if( noAngkot<=6){
        console.log('Angkot no.' + noAngkot+ ' berjalan dengan baik');
    }else if (noAngkot % 2 == 0) {
        console.log('Angkot no.' + noAngkot+ ' sedang lebmur');
    }
    else{
        console.log('Angkot no.' +noAngkot+ 'sedang rusak');
    }
}