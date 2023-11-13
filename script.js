let jogador = 0
let jogo_andamento = 1 // "1" indica que o jogo esta em andamento
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0,]
let vitorias_x = 0
let vitorias_y = 0

function iniciarJogo() 
{
    for (let i = 1; i < 10; i++) 
    {
        document.getElementById(i).innerHTML = "";
    }

    document.getElementById("botao").innerHTML = "Reiniciar jogo"
}

function jogada(posicao) 
{
    if (jogo_andamento == 1) 
    {

        if (document.getElementById(posicao).innerHTML == "") 
        {

            if (jogador == 0) 
            {
                document.getElementById(posicao).innerHTML = "X"
                jogador = 1
                tabuleiro[posicao - 1] = "X"
            }
            else 
            {
                document.getElementById(posicao).innerHTML = "O"
                jogador = 0
                tabuleiro[posicao - 1] = "O"
            }
        }
        VerificarVitoria()
        mostrar();
    }
}


function VerificarVitoria() 
{
    // Verifica se há uma linha vencedora
    for (let i = 0; i < 9; i += 3) 
    {
        if (tabuleiro[i] != 0 && tabuleiro[i] == tabuleiro[i + 1] && tabuleiro[i + 1] == tabuleiro[i + 2]) 
        {
            alert([jogador], "ganhou");
        }
    }
}

function mostrar() {
    document.getElementById("mostrar").innerHTML = tabuleiro;
} 
