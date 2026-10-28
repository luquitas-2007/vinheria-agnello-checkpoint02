
// ---------- Constantes ----------
const ANO_ATUAL = new Date().getFullYear();
const LIMITE_VINHOS = 5;
const ESTOQUE_MINIMO = 5;


function lerTexto(mensagem) {
  let valor = prompt(mensagem);  

  while (valor === null || valor() === "") {
    alert(" Entrada inválida! O campo não pode ficar vazio.");
    valor = prompt(mensagem);
  }

  return valor();
}