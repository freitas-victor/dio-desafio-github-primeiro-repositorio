/* 
Faça um programa para calcular o valor gasto de uma viagem.

Voce tera cinco variavéis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustivel do carro por km;
5 - Distância em km da viagem; 
*/
const precoEtanol = 4.09
const precoGasolina = 4.78;
const kmPorLitroComGasolina = 10;
const kmPorLitroComEtanol = 7;
const distanciaEmKm = 274;
let tipoCombustivel = 'Gasolina';

if(tipoCombustivel === 'Etanol'){
    console.log(`O valor gasto na viagem é ${((distanciaEmKm / kmPorLitroComEtanol) * precoEtanol).toFixed(2)}`);
}else if (tipoCombustivel === 'Gasolina'){
    console.log(`O valor gasto na viagem é ${((distanciaEmKm / kmPorLitroComGasolina) * precoGasolina).toFixed(2)}`);
}else {
    console.log('Diga se usou Etanol ou Gasolina');
}