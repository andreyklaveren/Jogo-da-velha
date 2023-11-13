let jogador = 0
let jogo_andamento = 1 // "1" indica que o jogo esta em andamento
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0,]
let vitorias_x = 0
let vitorias_y = 0

function iniciarJogo() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = "";
    }

    document.getElementById("botao").innerHTML = "Reiniciar jogo"
}

function jogada(posicao) {
    if (jogo_andamento == 1) {

        if (document.getElementById(posicao).innerHTML == "") 
        {

            if (jogador == 0) 
            {
                document.getElementById(posicao).innerHTML = "X"
                jogador = 1
                tabuleiro(posicao) = "x"
            } 
            else 
            {
                document.getElementById(posicao).innerHTML = "O"
                jogador = 0
                tabuleiro(posicao) = "o"
            }
        }   
    }
}





function mostrar() {
    for (let i = 0; i < 9; i++) {
        document.getElementById("mostrar").innerHTML = tabuleiro;
        
    }
} 

mostrar();