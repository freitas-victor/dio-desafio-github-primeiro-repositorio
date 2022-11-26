const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0) {
    console.log('[ERRO] O número é inválido!')
}else if (numeroDivisivelPor5) {
    console.log('É Divisivel');
}else {
    console.log('Não é Divisivel');
}