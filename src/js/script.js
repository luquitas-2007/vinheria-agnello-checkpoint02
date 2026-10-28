
// ---------- Constantes ----------
var ANO_ATUAL = 2026
var LIMITE_VINHOS = 5;
var ESTOQUE_MINIMO = 5;


function lerTexto(mensagem) {
  var valor = prompt(mensagem);  


  // Laço: continua pedindo enquanto a entrada for inválida
  while (valor === null || valor.trim() === "") {
    alert("⚠️ Entrada inválida! O campo não pode ficar vazio.");
    valor = prompt(mensagem);
  }

  return valor.trim();
}