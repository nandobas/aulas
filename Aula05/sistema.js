
const output = document.querySelector(".output");
const txtColuna = document.getElementById("txtColuna");
const txtLinha = document.getElementById("txtLinha");
const txtFigura = document.getElementById("txtFigura");

let matriz  = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
];

retorno = desenharTabuleiro(matriz);
ouput(retorno);

function start(){
    let retorno = 0;
    let linha = txtLinha.value;
    let coluna = txtColuna.value;
    let figura = txtFigura.value;

    matriz = desenharJogada(matriz, linha, coluna, figura);

    retorno = desenharTabuleiro(matriz);

    ouput(retorno);
}

function ouput(texto){
    output.innerHTML = '<br>'+texto;
}

function desenharJogada(matriz, linha, coluna, figura){

    matriz[linha][coluna]=figura;
    return matriz;
}

function desenharTabuleiro(matriz){
    let tabuleiro="";
    for(linha=0; linha <=2; linha++){
        for(coluna=0; coluna <=2; coluna++){
            tabuleiro = tabuleiro + '[' + matriz[linha][coluna]+'] ';
        }
        tabuleiro = tabuleiro + ' <br>';
    }
    return tabuleiro;
}