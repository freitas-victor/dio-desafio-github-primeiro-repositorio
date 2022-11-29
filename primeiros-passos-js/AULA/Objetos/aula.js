class Pessoa {
    nome;
    idade;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
       
    }
       descrever(){
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`);
        }

}
function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const ana = new Pessoa('Ana', 26);
//ana.descrever();

const victor = new Pessoa('Victor', 28);
//victor.descrever(); 
compararPessoas(victor,ana);