const prompt = require("prompt-sync")();

//Array para seleção

const selecao = ["PEDRA", "PAPEL", "TESOURA"];

// Início do jogo, e retorno caso o jogador decida jogar de novo

while (true) {
  //Definição de variáveis de controle do jogo
  let vitorias = 0; 
  let derrotas = 0;
  let empates = 0;

  //Seleção e validação da quantidade de rodadas escolhida pelo jogador
  console.log(`Quantas rodadas você quer jogar?`);
  let rodadas = +prompt(``).trim().toUpperCase();
  while(true){
    if (!isNaN(rodadas) && rodadas>0) break;
    else {
      console.log(`Por favor digite um numero valido para as rodadas:`)
      rodadas = prompt(``)
    }
  }

  //Laço de repetição das rodadas, baseado na escolha do jogador
  for (i = 0; i < rodadas; i++) {
    console.log(`-----------------------------------------------------------------`)
    // Escolha e validação da escolha do jogador, baseado no array de seleção
    console.log(`Escolha entre Pedra, Papel e Tesoura:`);
    let escolhaPlayer = prompt(``).trim().toUpperCase();

    while (true) {
      if (selecao.indexOf(escolhaPlayer) != -1) break;
      else {
        console.log(`\nPor favor, escolha entre Pedra, Papel e Tesoura:`);
        escolhaPlayer = prompt(``).trim().toUpperCase();
      }
    }
    // Escolha aleatória da maquina, e transformação da escolha do jogador de string para numero de indice no array
    let escolhaPc = Math.floor(Math.random() * 3);
    let selecaoComp = selecao[escolhaPc];
    let selecaoPlayer = selecao[selecao.indexOf(escolhaPlayer)];
    escolhaPlayer = selecao.indexOf(escolhaPlayer);

    // Validações e comparações das duas escolhas para definir o vencedor da rodada, utilizando as posições relativas no array de seleção.
    // Se forem iguais, empate. O numero de indice maior ganha. Com exceção da primeira posição, que ganha da ultima
    if (escolhaPc === escolhaPlayer) {
      console.log(
        `\nVocê escolheu: ${selecaoPlayer}\nEu escolhi: ${selecaoComp}\nNesta rodada vocês empataram.`
      );
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
  // Exibição do placar, baseado nas rodadas.
  console.log(
    `Você ganhou ${vitorias} vezes.\nEu ganhei ${derrotas} vezes.\nEmpatamos ${empates} vezes.`
  );
  // Exibição do campeão se houver um.
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
  // Escolha do jogador de jogar novamente ou não. Se decidir jogar novamente o programa reinicia.
  console.log(`\nDeseja jogar novamente? `);
  let jogarNovamente = prompt(``).trim().toUpperCase();
  if (jogarNovamente != "SIM" && jogarNovamente!= "S") break;
  console.clear();
}
console.clear();
