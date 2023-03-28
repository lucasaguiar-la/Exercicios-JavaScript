let row = [];
let option = "";

do {
  let patient = "";
  for (let i = 0; i < row.length; i++) {
    patient += i + 1 + `º - ${row[i]}\n`;
  }
  option = Number(
    prompt(`Lista de paciêntes:
    ${patient}
    [ 1 ] Novo paciênte
    [ 2 ] Atender paciênte
    [ 3 ] Sair`)
  );

  switch (option) {
    case 1:
      let newP = prompt("Qual o nome do paciênte?");
      row.push(newP);
      break;
    case 2:
      let removeP = row.shift();
      if (removeP < 0 || removeP === null || removeP === undefined) {
        alert("Não há mais paciêntes para serem atendidos...");
      } else {
        alert(`${removeP} foi atendido!`);
      }
      break;
    case 3:
      alert("Ecerrando programa...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option != 3);
