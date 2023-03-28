alert("Veja qual a sua mão nesse baralho virtual!");
let deck = [];
let option = "";

do {
  option = Number(
    prompt(`Cartas no baralho: ${deck.length}
  [ 1 ] Adicionar carta
  [ 2 ] Puxar carta
  [ 3 ] Sair`)
  );

  switch (option) {
    case 1:
      let add = prompt("Qual carta você irá adicionar ao baralho?");
      deck.unshift(add);
      break;
    case 2:
      let rm = deck.shift();
      if (rm == undefined || rm < 0) {
        alert("Não há mais cartas para serem puxadas!");
      } else {
        alert(`A carta ${rm} foi puxada!`);
      }
      break;
    case 3:
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção inválida!\nTente novamente...");
      break;
  }
} while (option != 3);

let result = document.querySelector("div.result");
result.innerHTML += `Seu baralho salvo:<br />${card}`;
