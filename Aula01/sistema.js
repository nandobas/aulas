
const output = document.querySelector(".output");

function start(){
    let valorA = 15;
    let valorB = 8;
    let retorno = 0;

    retorno=somarNumeros(valorA, valorB);

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
