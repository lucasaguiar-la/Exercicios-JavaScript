let result = document.querySelector("div.res");

alert("Bem-Vindo à CV, sua Carteira Virtual!");

do {
  let list = prompt(
    "Escolha uma opção:\n[ 1 ] Saldo\n[ 2 ] Deposito\n[ 3 ] Saque\n[ 4 ] Extrato\n[ 5 ] Encerrar operação"
  );
  number = list;
  if (number == null || number <= 0 || number > 5) {
    alert("Opção inválida!");
  } else {
    alert(`Opção ${number}`);
  }
} while (number != 5);

result.innerHTML = `Opção ${number} selecionada. <br />
Programa finalizado!`;

/* Pode-se usar em "while" da seguinte maneira:
while (number != "5")

Assim dispensamos a especificação "Number" nas variáveis.*/
