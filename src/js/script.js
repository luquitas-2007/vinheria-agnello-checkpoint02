
// ---------- Constantes ----------
var ANO_ATUAL = 2026
var LIMITE_VINHOS = 5;
var ESTOQUE_MINIMO = 5;

// ---------- funcoes e repeticoes ----------

function lerTexto(mensagem) {
  var valor = prompt(mensagem);  


  while (valor === null || valor.trim() === "") {
    alert("⚠️ Entrada inválida! O campo não pode ficar vazio.");
    valor = prompt(mensagem);
  }

  return valor.trim();
}

function lerNumero(mensagem, minimo, maximo) {
  var numero = Number(lerTexto(mensagem));

  while (isNaN(numero) || numero < minimo || numero > maximo) {
    alert("⚠️ Digite um número entre " + minimo + " e " + maximo + ".");
    numero = Number(lerTexto(mensagem));
  }

  return numero;
}

function lerTipo() {
  var tipo = lerTexto("Tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();

  while (tipo !== "tinto" && tipo !== "branco" && tipo !== "rosé") {
    alert("⚠️ Tipo inválido! Use Tinto, Branco ou Rosé.");
    tipo = lerTexto("Tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
  }

  return tipo;
}