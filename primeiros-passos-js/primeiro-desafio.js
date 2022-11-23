/* 
Faça um programa para calcular o valor gasto de uma viagem.

Voce tera três variavéis:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distância em km da viagem; 
*/
const precoCombustivel = 4.78;
const kmPorLitro = 10;
const distanciaEmKm = 274;

let valorGasto = distanciaEmKm / kmPorLitro * precoCombustivel;
console.log('O valor gasto foi ' + valorGasto.toFixed(2));
