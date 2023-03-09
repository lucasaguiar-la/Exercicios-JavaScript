function calculate() {
  let number = document.querySelector("input#number");
  let measure = document.querySelector("select#measure");
  const result = document.querySelector("div#result");

  number = Number(number.value);
  measure = measure.value;

  if (number === 0) {
    result.innerHTML = "Valor não especificado...";
  } else {
    switch (measure) {
      case "mm":
        answer = number * 1000;
        break;
      case "cm":
        answer = number * 100;
        break;
      case "dm":
        answer = number * 10;
        break;
      case "dam":
        answer = number * 0.1;
        break;
      case "hm":
        answer = number * 0.01;
        break;
      case "km":
        answer = number * 0.001;
        break;
      default:
        break;
    }
  }

  result.style.paddingTop = "2rem";
  result.style.fontWeight = "700";
  result.style.fontSize = "19pt";
  result.innerHTML = `Quantidade digitada: ${number}m <br />
  Resultado: ${answer}${measure}`;
}
