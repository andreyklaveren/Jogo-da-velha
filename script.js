function iniciarJogo() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = "";
    }

    document.getElementById("botao").innerHTML = "Reiniciar jogo"
}

function jogada(posicao) {
    if (document.getElementById(posicao).innerHTML == "") {
        document.getElementById(posicao).innerHTML = "X"
    } else {
        alert("Posição não disponível")
    }
}