
const output = document.querySelector(".output");

function start(){
    let saida = listarCaixaChocolate()
    ouput(saida);
    
}

function ouput(texto){
    output.innerHTML = texto;
}

function finish() {

    let palavra = "oi";
    let saida   = "<br>";

    // laço de repetição FOR
    for(i=0; i<=10;i++){
        /* 
            concatena na variavel 'saída' 
            o valor da variável 'palavra' + a quebra de linha '<br>'
        */
        saida += i + ':' + palavra + "<br>";
    }
    return saida
}

function caixaChocolate(posiçao){

    let caixaChocolate = ["bis0", "bis1", "bis2", "bis3", "lolo", "bis5", "choquito"];
    return caixaChocolate[posiçao];

}

function listarCaixaChocolate(){

    let saida   = "<br>";

    // laço de repetição FOR
    for(i=0; i < 7;i++){
        /* 
            concatena na variavel 'saída' 
            o valor da variável 'palavra' + a quebra de linha '<br>'
        */
        saida += caixaChocolate(i) + "<br>";
    }
    return saida
}