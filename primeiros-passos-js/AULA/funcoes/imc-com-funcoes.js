/*
2) Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condiçao:
- Abaixo de 18.5, Abaixo do Peso;
- Entre 18.5 e 25, Peso Pormal;
- Entre 25 e 30, Acima do Peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave;
*/

function calcularImc(peso,altura){
   return peso / (altura ** 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do Peso';
    }else if(imc >= 18.5 && imc < 25){
        return 'Peso Normal';
    }else if(imc >= 25 && imc < 30){
        return 'Acima do Peso';
    }else if(imc >= 30 && imc < 40){
         return 'Obeso';
    }else{
        return 'Obesidade Grave';
}
}

(function (){
    
    const peso = 78;
    const altura = 1.78;
    const imc = calcularImc(peso,altura);
    
    console.log(calcularImc(peso,altura));
    console.log(classificarImc(imc));
    
})();
