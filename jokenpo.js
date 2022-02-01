const prompt = require("prompt-sync")();

const selecao = ["PEDRA", "PAPEL", "TESOURA"];
let vitorias = 0;
let derrotas = 0;
let empates = 0;
let continuar = false;

let rodadas = +prompt(`Quantas rodadas você quer jogar?`);

do {
  for (i = 0; i < rodadas; i++) {
    let escolhaPc = Math.round(Math.random() * 3);
    let selecaoComp = selecao[escolhaPc];

    console.log(`Escolha entre Pedra, Papel e Tesoura:`);
    let escolhaPlayer = prompt(``);

    while (selecao.indexOf(escolhaPlayer.toUpperCase()) == -1) {
      escolhaPlayer = prompt(
        `Por favor, escolha entre Pedra, Papel e Tesoura:`
      );
    }

    let selecaoPlayer = selecao[selecao.indexOf(escolhaPlayer.toUpperCase())];
    escolhaPlayer = selecao.indexOf(escolhaPlayer.toUpperCase());

    if (escolhaPc === escolhaPlayer) {
      console.log(
        `Você escolheu: ${selecaoPlayer}\nA máquina escolheu: ${selecaoComp}\nNesta rodada vocês empataram.`
      );
      console.log(``);
      empates++;
    } else if (escolhaPlayer > escolhaPc) {
      console.log(
        `Você escolheu: ${selecaoPlayer}\nA máquina escolheu: ${selecaoComp}\nNesta rodada você ganhou.`
      );
      vitorias++;
    } else if (escolhaPlayer < escolhaPc) {
      console.log(
        `Você escolheu: ${selecaoPlayer}\nA máquina escolheu: ${selecaoComp}\nNesta rodada você perdeu.`
      );
      derrotas++;
    }
    console.log(
      `Você obteve:\n${vitorias} vitórias.\n${derrotas} derrotas.\n${empates} empates.`
    );
  }

      console.log(`Deseja jogar novamente? `)
    let jogarNovamente = prompt(``)
    while (jogarNovamente.toUpperCase != "SIM" && jogarNovamente.toUpperCase != "NAO" && jogarNovamente.toUpperCase != "NÃO"){
      console.log(`Por favor, digite apenas sim ou não: `)
      jogarNovamente = prompt(``)
    }
    if (jogarNovamente.toUpperCase == "SIM"){
      continuar = true
    } else {
      continuar = false
    }
} while (continuar = false)
