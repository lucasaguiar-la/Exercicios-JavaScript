// Botão para atualizar página
function abrir() {
  var btn = document.querySelector("div.js_btn");
  btn.onclick = function () {
    window.history.go(0);
  };
}
// Verificador de Velocidade
function verificar() {
  let name_1 = document.querySelector("input#box1");
  let vel_1 = document.querySelector("input#vel1");
  let name_2 = document.querySelector("input#box2");
  let vel_2 = document.querySelector("input#vel2");
  let result = document.querySelector("div.js_res");

  name_1 = name_1.value;
  name_2 = name_2.value;
  vel_1 = Number(vel_1.value);
  vel_2 = Number(vel_2.value);

  if (vel_1 > vel_2) {
    result.innerHTML = `O veículo ${name_1} é mais rápido e vence a corrida à incríveis ${vel_1}Km/h!`;
  } else if (vel_2 > vel_1) {
    result.innerHTML = `O veículo ${name_2} é mais rápido e vence a corrida à incríveis ${vel_2}Km/h!`;
  } else {
    result.innerHTML = "Algo deu errado! Atualize a página e tente novamente";
  }
}
