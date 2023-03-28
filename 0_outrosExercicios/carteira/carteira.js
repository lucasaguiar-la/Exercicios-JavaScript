let result = document.querySelector("div.result");
let sale = Number(prompt("Qual o seu saldo atual?"));

do {
  let option = Number(
    prompt(
      `Seu saldo: R$${sale}\n[ 1 ] Adicionar saldo\n[ 2 ] Remover saldo\n[ 3 ] Sair`
    )
  );
  number = option;

  if (number == null || number <= 0 || number > 3) {
    alert("Opção inválida!\nPor favor, tente novamente.");
  }
  switch (number) {
    case 1:
      let sum = Number(prompt("Qual o valor que deseja adicionar?"));
      sale += sum;
      break;
    case 2:
      let minus = Number(prompt("Qual o valor que deseja remover?"));
      sale -= minus;
      break;
  }
} while (number != 3);

result.innerHTML += `Saldo atual: R$${sale} <br />
Fazer nova operação?`;
