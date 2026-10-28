
// ---------- Constantes ----------
var ANO_ATUAL = 2026
var LIMITE_VINHOS = 5;
var ESTOQUE_MINIMO = 5;

// ---------- funcoes e repeticoes ----------

function lerTexto(mensagem) {
  var valor = prompt(mensagem);  


  while (valor === null || valor.trim() === "") {
    alert("Entrada inválida! O campo não pode ficar vazio.");
    valor = prompt(mensagem);
  }

  return valor.trim();
}

function lerNumero(mensagem, minimo, maximo) {
  var numero = Number(lerTexto(mensagem));

  while (isNaN(numero) || numero < minimo || numero > maximo) {
    alert("Digite um número entre " + minimo + " e " + maximo + ".");
    numero = Number(lerTexto(mensagem));
  }

  return numero;
}

function lerTipo() {
  var tipo = lerTexto("Tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();

  while (tipo !== "tinto" && tipo !== "branco" && tipo !== "rosé") {
    alert("Tipo inválido! Use Tinto, Branco ou Rosé.");
    tipo = lerTexto("Tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
  }

  return tipo;
}
function estoqueBaixo(quantidade) {
  return quantidade < ESTOQUE_MINIMO;
}

function classificarVinho(safra) {
  var idade = ANO_ATUAL - safra;

  if (idade <= 5) {
    return "Jovem";
  } else if (idade <= 15) {
    return "Amadurecido";
  } else {
    return "Antigo";
  }
}

function exibirVinho(numero, nome, tipo, safra, quantidade) {
  var texto = "Vinho " + numero + "\n";
  texto = texto + "Nome: " + nome + "\n";
  texto = texto + "Tipo: " + tipo + "\n";
  texto = texto + "Safra: " + safra + " (" + classificarVinho(safra) + ")\n";
  texto = texto + "Quantidade: " + quantidade + "\n";

  if (estoqueBaixo(quantidade)) {
    texto = texto + "ESTOQUE BAIXO!";
  } else {
    texto = texto + "Estoque ok";
  }

  console.log(texto);
  alert(texto);
}

function perguntarContinuar() {
  var resposta = lerTexto("Deseja cadastrar outro vinho? (S/N)").toLowerCase();

  while (resposta !== "s" && resposta !== "n") {
    alert(" Responda apenas com S ou N.");
    resposta = lerTexto("Deseja cadastrar outro vinho? (S/N)").toLowerCase();
  }

  return resposta === "s";
}

function iniciarSistema() {
  var nome1 = "", tipo1 = "", safra1 = 0, quant1 = 0;
  var nome2 = "", tipo2 = "", safra2 = 0, quant2 = 0;
  var nome3 = "", tipo3 = "", safra3 = 0, quant3 = 0;
  var nome4 = "", tipo4 = "", safra4 = 0, quant4 = 0;
  var nome5 = "", tipo5 = "", safra5 = 0, quant5 = 0;

  var cadastros = 0;      
  var continuar = true;   

  while (continuar === true && cadastros < LIMITE_VINHOS) {
    var nome = lerTexto("Nome do vinho:");
    var tipo = lerTipo();
    var safra = lerNumero("Safra (ano):", 1900, ANO_ATUAL);
    var quant = lerNumero("Quantidade em estoque:", 0, 10000);

    cadastros = cadastros + 1;

    if (cadastros === 1) {
      nome1 = nome; tipo1 = tipo; safra1 = safra; quant1 = quant;
    } else if (cadastros === 2) {
      nome2 = nome; tipo2 = tipo; safra2 = safra; quant2 = quant;
    } else if (cadastros === 3) {
      nome3 = nome; tipo3 = tipo; safra3 = safra; quant3 = quant;
    } else if (cadastros === 4) {
      nome4 = nome; tipo4 = tipo; safra4 = safra; quant4 = quant;
    } else if (cadastros === 5) {
      nome5 = nome; tipo5 = tipo; safra5 = safra; quant5 = quant;
    }

    exibirVinho(cadastros, nome, tipo, safra, quant);

    if (cadastros < LIMITE_VINHOS) {
      continuar = perguntarContinuar();
    } else {
      alert("Limite de " + LIMITE_VINHOS + " vinhos atingido.");
    }
  }
}

// ---------- chama o sistema pela função ----------

iniciarSistema();