
function saymyname(name){
      return name;
}


function confirmarMaiorIdade(idade){
    if (idade >= 18){
    console.log(saymyname('Victor') + ' é maior de idade')
    }else {
        console.log(saymyname('Victor') +' é menor de idade')
    }
}

confirmarMaiorIdade(28);