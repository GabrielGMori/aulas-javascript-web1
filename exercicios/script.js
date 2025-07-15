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
        resultado = num1.toString() + " (Número 1) é o maior";
    } else if (num2 > num1) {
        resultado = num2.toString() + " (Número 2) é o maior";
    }

    document.getElementById("ex6-resultado").textContent = "Resultado: " + resultado;
}

function ex7_gerar() {
    let num = Number(document.getElementById("ex7-num").value);
    let div = document.getElementById("ex7-resultado");

    div.innerHTML = "";

    for (let i=1; i<=10; i++) {
        let p = document.createElement("p");
        p.textContent = num + " x " + i + " = " + (num*i);
        div.appendChild(p);
    }
}

function ex8_contar() {
    let div = document.getElementById("ex8-resultado");

    div.innerHTML = "";

    for (let i=1; i<=10; i++) {
        let p = document.createElement("p");
        p.textContent = i;
        div.appendChild(p);
    }
}

function ex9_calcular() {
    let num1 = Number(document.getElementById("ex9-num1").value);
    let num2 = Number(document.getElementById("ex9-num2").value);
    let num3 = Number(document.getElementById("ex9-num3").value);

    let media = ((num1 + num2 + num3) / 3).toFixed(2);

    let resultado = "Aprovado";
    if (media < 6) {
        resultado = "Reprovado";
    }

    document.getElementById("ex9-resultado").textContent = "Resultado: " + resultado + " (Média: " + media + ")";
}

function ex10_converter() {
    let num = Number(document.getElementById("ex10-num").value);

    document.getElementById("ex10-resultado").textContent = "Temperatura em °F: " + ((num * 9/5) + 32);
}

function ex11_verificar() {
    let num = String(document.getElementById("ex11-num").value);

    let diasDaSemana = {
        "1": "Domingo",
        "2": "Segunda-feira",
        "3": "Terça-feira",
        "4": "Quarta-feira",
        "5": "Quinta-feira",
        "6": "Sexta-feira",
        "7": "Sábado",
    }

    let diaDaSemana = diasDaSemana[num];
    if (diaDaSemana === undefined) {
        diaDaSemana = "N/A"
    }

    document.getElementById("ex11-resultado").textContent = "Dia da semana: " + diaDaSemana;
}

function ex12_verificar() {
    let num = String(document.getElementById("ex12-num").value);

    resultado = "Senha incorreta"
    if (num == "1234") {
        resultado = "Acesso permitido"
    }

    document.getElementById("ex12-resultado").textContent = resultado;
}

function ex13_contar() {
    let div = document.getElementById("ex13-resultado");

    div.innerHTML = "";

    for (let i=10; i>=1; i--) {
        console.log(i)
        let p = document.createElement("p");
        p.textContent = i;
        div.appendChild(p);
    }
}
