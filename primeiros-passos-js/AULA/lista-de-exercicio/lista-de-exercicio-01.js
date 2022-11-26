/*
1) Faça um algoritmo que dado as três notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
sua média e a sua classificação conforme a tabela a baixo:


Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação; 
- Média acima que 7, aprovação;
*/

const nota1 = 6;
const nota2 = 6;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média é ${media.toFixed(2)}`);

if (media < 5) {
    console.log('REPROVADO');
} else if (media => 5, media <= 7) {
    console.log('RECUPERAÇÃO');
} else {
    console.log('APROVADO');
}