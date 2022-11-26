/*
2) Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condiçao:
- Abaixo de 18.5, Abaixo do Peso;
- Entre 18.5 e 25, Peso Pormal;
- Entre 25 e 30, Acima do Peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;
*/

const pesoKg = 96;
const altura = 1.78;
const imc = pesoKg / (altura ** 2);

console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do Peso');
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso Normal');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do Peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave')
}
