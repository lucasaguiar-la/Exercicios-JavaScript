alert("Seja bem-vindo a tabuada dos guaxinins!");
let number = "";
let result = document.querySelector("div.result");

// Validação caso não digite nada
do {
  n = prompt(
    "Digite um número, e deixe nossos amigos guaxinins fazerem seu trabalho!"
  );
  number = n;
  if (number == "" || number < 0 || number >= 900) {
    alert("Algo deu errado!\nTente novamente...");
  }
} while (number == "" || number < 0 || number >= 900);

// Tabuada
for (let i = 1; i <= 10; i++) {
  let mult = number * i;
  result.innerHTML += `${number}x${i} = ${mult}<br />`;
}

// Formatação da tabuada
document.querySelector("div.result").style.paddingLeft = "10.5rem";
document.querySelector("div.result").style.paddingTop = "1.5rem";
document.querySelector("div.result").style.fontSize = "15pt";
