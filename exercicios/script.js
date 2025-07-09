function ex1_somar() {
    let num1 = Number(document.getElementById("ex1-num1").value);
    let num2 = Number(document.getElementById("ex1-num2").value);

    document.getElementById("ex1-resultado").textContent = "Resultado: " + (num1+num2);
}

function ex2_verificar() {
    let idade = Number(document.getElementById("ex2-idade").value);
    let resultado = "Você é maior de idade";
    if (idade < 0) resultado = "Idade inválida";
    else if (idade < 18) resultado = "Você é menor de idade";

    document.getElementById("ex2-resultado").textContent = resultado;
}

function ex3_contar() {
    let caracteres = Number(document.getElementById("ex3-texto").value.length);

    document.getElementById("ex3-resultado").textContent = "Total de caracteres: " + caracteres;
}

function ex4_verificar() {
    let num = Number(document.getElementById("ex4-num").value);
    resultado = "O número é ímpar";
    if (num % 2 == 0) {
        resultado = "O número é par";
    }

    document.getElementById("ex4-resultado").textContent = resultado;
}

function ex5_conversao() {
    let nome = String(document.getElementById("ex5-nome").value).toUpperCase();

    document.getElementById("ex5-resultado").textContent = nome;
}

function ex6_comparar() {
    let num1 = Number(document.getElementById("ex6-num1").value);
    let num2 = Number(document.getElementById("ex6-num2").value);

    resultado = "Os números são iguais"
    if (num1 > num2) {
        resultado = "Número maior: Número 1 (" + num1 + ")";
    } else if (num2 > num1) {
        resultado = "Número maior: Número 2 (" + num2 + ")";
    }

    document.getElementById("ex6-resultado").textContent = resultado;
}

function ex7_gerar() {
    let num = Number(document.getElementById("ex7-num").value);
    let div = document.getElementById("ex7-resultado");

    div.innerHTML = ""

    for (let i=1; i<=10; i++) {
        let p = document.createElement("p")
        p.textContent = num + " x " + i + " = " + (num*i)
        div.appendChild(p)
    }
}
