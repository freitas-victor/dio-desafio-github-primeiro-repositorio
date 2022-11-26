/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição
de pagamento.
Utilize os códigos da tabla a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista Dinhero ou PIX, recebe 15% de desconto;
3 - Parcelado até duas vezes, preço normal de etiqueta, sem juros;
4 - Parcelado a cima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/



function calculeJuros(valor,porcetagem){
    
    return  valor + (valor * porcetagem/100);
}
function calculeDesconto(valor , porcetagem){
    
    return  valor - (valor * porcetagem/100);
    
}
function main(){

    const precoEtiqueta = 100
    const formaPagamento = 1

    if (formaPagamento === 1){
        console.log(`O valor do produto é ${precoEtiqueta}, com o desconto fica ` + calculeDesconto(precoEtiqueta,10));
    }else if (formaPagamento === 2){
        console.log(`O valor do produto é ${precoEtiqueta}, com o desconto fica `  + calculeDesconto(precoEtiqueta,15));   
    }else if (formaPagamento === 3){
        console.log(`O valor do produto é ${precoEtiqueta}, até duas vezes sem juros`);
    }else{
        console.log(`O valor do produto é ${precoEtiqueta}, com o juros o valor total fica ` + calculeJuros(precoEtiqueta,10));
    }
}

main();

