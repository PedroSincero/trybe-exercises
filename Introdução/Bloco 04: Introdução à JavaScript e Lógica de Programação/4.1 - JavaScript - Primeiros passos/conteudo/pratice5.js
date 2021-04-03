let candidato = "aprovada";

switch (candidato) {
  case "aprovada":
    console.log("Parabéns, voce foi aprovado!");
    break;
  case "lista":
    console.log("Voce está na nossa lista de espera");
    break;
  case "reprovado":
    console.log("Voce foi reprovada");
    break;

  default:
    console.log("nenhum valor encontrado");
}