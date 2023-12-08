document.addEventListener("DOMContentLoaded", () => {
    const tabuleiro = document.getElementById("tabuleiro");
    const celulas = document.querySelectorAll(".celula");
    let jogadorAtual = "X";
    let estadoJogo = ["", "", "", "", "", "", "", "", ""];
  
    celulas.forEach((celula, index) => {
      celula.addEventListener("click", () => {
        if (estadoJogo[index] === "" && !verificarVencedor()) {
          estadoJogo[index] = jogadorAtual;
          celula.textContent = jogadorAtual;
          if (verificarVencedor()) {
            alert(`O jogador ${jogadorAtual} venceu!`);
          } else if (!estadoJogo.includes("")) {
            alert("Empate!");
          } else {
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
          }
        }
      });
    });
  
    function verificarVencedor() {
      const condicoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let condicao of condicoesVitoria) {
        const [a, b, c] = condicao;
        if (
          estadoJogo[a] !== "" &&
          estadoJogo[a] === estadoJogo[b] &&
          estadoJogo[b] === estadoJogo[c]
        ) {
          return true;
        }
      }
  
      return false;
    }
  });
  