const prompt = require("prompt-sync")();

const selecao = ["PEDRA", "PAPEL", "TESOURA"];



while (true) {
  let vitorias = 0;
  let derrotas = 0;
  let empates = 0;
  console.log(`Quantas rodadas você quer jogar?`);
  let rodadas = +prompt(``).trim().toUpperCase();
  while(true){
    if (!isNaN(rodadas) && rodadas>0) break;
    else {
      console.log(`Por favor digite um numero valido para as rodadas:`)
      rodadas = prompt(``)
    }
  }
  for (i = 0; i < rodadas; i++) {
    console.log(`-----------------------------------------------------------------`)
    console.log(`Escolha entre Pedra, Papel e Tesoura:`);
    let escolhaPlayer = prompt(``).trim().toUpperCase();

    while (true) {
      if (selecao.indexOf(escolhaPlayer) != -1) break;
      else {
        console.log(`\nPor favor, escolha entre Pedra, Papel e Tesoura:`);
        escolhaPlayer = prompt(``).trim().toUpperCase();
      }
    }

    let escolhaPc = Math.floor(Math.random() * 3);
    let selecaoComp = selecao[escolhaPc];
    let selecaoPlayer = selecao[selecao.indexOf(escolhaPlayer)];
    escolhaPlayer = selecao.indexOf(escolhaPlayer);

    if (escolhaPc === escolhaPlayer) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada vocês empataram.`
      );
      console.log(``);
      empates++;
    } else if (escolhaPlayer == 0 && escolhaPc == 2) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada você ganhou.`
      );
      vitorias++;
    } else if (escolhaPc == 0 && escolhaPlayer == 2) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada você perdeu.`
      );
      derrotas++;
    } else if (escolhaPlayer > escolhaPc) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada você ganhou.`
      );
      vitorias++;
    } else if (escolhaPlayer < escolhaPc) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada você perdeu.`
      );
      derrotas++;
    }
  }

  console.log(
    `Você ganhou ${vitorias} vezes.\n Eu ganhei ${derrotas} vezes.\nEmpatamos ${empates} vezes.`
  );

  if (vitorias > derrotas) {
    console.log(`\nParabéns, você venceu com ${vitorias} vitórias.`);
  } else if (vitorias < derrotas) {
    console.log(
      `\nQue pena, derrotei você dessa vez, com ${derrotas} vitórias.`
    );
  } else {
    console.log(
      `\nQuais as probabilidades disso acontecer?!?!?! Empatamos no placar geral ${vitorias+empates} vezes e ninguém ganhou dessa vez.`
    );
  }

  console.log(``);

  console.log(`\nDeseja jogar novamente? `);
  let jogarNovamente = prompt(``).trim().toUpperCase();
  if (jogarNovamente != "SIM") break;
  console.clear();
}
console.clear();
