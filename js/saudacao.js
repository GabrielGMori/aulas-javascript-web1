const cliqueAquiButton = document.getElementById("cliqueAqui");

console.log("Hello World");

function testVar() {
    var mensagem = "Olá com VAR";

    if (true) {
        var mensagem = "Variável VAR mensagem mudada";
    }

    console.log(mensagem);
}
testVar();

function testLet() {
    let mensagem = "Olá com LET";

    if (true) {
        let mensagem = "Variável LET mensagem mudada";
    } 

    console.log(mensagem);
}
testLet();

const array = [1,2,4];
array.push(7)
console.log(array);

const pessoa = {
    nome: "gabriel",
    idade: 16
}
pessoa.nome = "pedro"
console.log(pessoa);

const saudacaoText = 'Bem-vindo ao nosso site';

function saudacao() {
    alert(saudacaoText);
}
