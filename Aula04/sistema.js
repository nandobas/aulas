
const output = document.querySelector(".output");
const txtValorA = document.getElementById("txtValorA");
const txtValorB = document.getElementById("txtValorB");

function start(comando, valorA, valorB){
    let retorno = 0;

    if (comando == "somar") {
        retorno=somarNumeros(valorA, valorB);
    } else if (comando == "dividir"){
        retorno = dividirNumeros(valorA, valorB);
    } else if (comando == "multiplicar"){
        retorno = multiplicarNumeros(valorA, valorB);
    } else{
        retorno=diminuirNumeros(valorA, valorB);
    }

    let minhaContinha = 'resultado ='+retorno;
    ouput(minhaContinha);
}

function ouput(texto){
    output.innerHTML = texto;
}

function somarNumeros(a, b){
    let resultado = a + b;
    return resultado;
}

function diminuirNumeros(a, b){
    let resultado = a - b;
    return resultado;
}

function dividirNumeros (a, b){
    let resultado = a / b;
    return resultado;
}

function multiplicarNumeros (a, b){
    let resultado = a * b;
    return resultado;
}

function GetValorA(){
    return parseInt(txtValorA.value);
}

function GetValorB(){
    return parseInt(txtValorB.value);
}
