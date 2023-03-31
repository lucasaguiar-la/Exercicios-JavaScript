let properties = [];
let option = "";

do {
  option = Number(
    prompt(`Sistema da Imobiliária:
  Imovéis cadastrados: ${properties.length}\n
  [ 1 ] Cadastrar novo imóvel
  [ 2 ] Exibir todos os imóveis
  [ 3 ] Sair`)
  );

  switch (option) {
    case 1:
      let immobile = {};
      immobile.name = prompt("Qual o nome do proprietário?");
      immobile.room = prompt("Qual a quantidade de quartos?");
      immobile.bathroom = prompt("Quantos banheiros a casa tem?");
      immobile.garage = prompt("O imóvel possuí garagem?");

      let conf = confirm(`Dados do imóvel:
      Nome do proprietário: ${immobile.name}
      Quantidade de quartos: ${immobile.room}
      Quantidade de banheiros: ${immobile.bathroom}
      Possuí garagem? ${immobile.garage}
      \nCadastrar imóvel?`);

      if (conf == true) {
        properties.push(immobile);
        alert("Imovél cadastrado com sucesso!");
      } else {
        alert("O imóvel não foi cadastrado.");
      }

      break;
    case 2:
      for (let i = 0; i < properties.length; i++) {
        alert(`Dados do imóvel ${i + 1}
        Nome do proprietário: ${properties[i].name}
        Quantidade de quartos: ${properties[i].room}
        Quantidade de banheiros: ${properties[i].bathroom}
        Possuí garagem? ${properties[i].garage}`);
      }
      break;
    case 3:
      alert("Encerrando processo...");
      break;
    default:
      alert("Algo deu errado!\nTente novamente...");
      break;
  }
} while (option != 3);
