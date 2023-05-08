//Triângulo
function triangleArea() {
  let triangleBase = prompt("Informe qual a base do triângulo:");
  let triangleWidth = prompt("Informe a altura:");
  return (triangleBase * triangleWidth) / 2;
}

//Retângulo
function rectangleArea() {
  let rectangleBase = prompt("Informe qual a base do retângulo:");
  let rectangleWidth = prompt("Informe a altura:");
  return rectangleBase * rectangleWidth;
}

//Quadrado
function squareArea() {
  let side = prompt("Informe o valor da aresta:");
  return side * side;
}

//Trapézio
function trapezeArea() {
  let minorBase = parseFloat(prompt("Qual a base menor?"));
  let biggerBase = parseFloat(prompt("Qual a base maior?"));
  let trapezeWidth = prompt("Qual a altura do trapézio?");
  return ((minorBase + biggerBase) * trapezeWidth) / 2;
}

//Círculo
function circleArea() {
  let radius = prompt("Qual o raio desse círculo?");
  return 3.14 * radius * radius;
}

//Menu
function showMenu() {
  return prompt(`Calculadora Geométrica:
  [ 1 ] Calcular área do triângulo
  [ 2 ] Calcular área do retângulo
  [ 3 ] Calcular área do quadrado
  [ 4 ] Calcular área do trapézio
  [ 5 ] Calcular área do círculo
  [ 6 ] Sair`);
}

function exe() {
  let option = "";
  do {
    option = showMenu();
    let result;

    switch (option) {
      case "1":
        result = triangleArea();
        break;
      case "2":
        result = rectangleArea();
        break;
      case "3":
        result = squareArea();
        break;
      case "4":
        result = trapezeArea();
        break;
      case "5":
        result = circleArea();
        break;
      case "6":
        alert("Programa finalizado...");
        break;
      default:
        alert("Opção inválida!");
    }
    if (result) {
      alert(`Resultado: ${result}`);
    }
  } while (option != "6");
}

exe();
