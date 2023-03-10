function start() {
  let end = document.querySelector("input#end");
  let skip = document.querySelector("input#skip");
  let start = document.querySelector("input#start");
  let result = document.querySelector("div#res");

  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    skip.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
    result.innerHTML = `Não foi possível criar a sequência...<br />
    Tente novamente!`;
  } else {
    result.innerHTML = "Sequência: <br />";
    let e = Number(end.value);
    let sk = Number(skip.value);
    let st = Number(start.value);
    if (sk <= 0) {
      alert(`Valor de PULO: 0! 
Considerando como PULO: 1`);
      sk = 1;
    }

    if (st < e) {
      for (let cont = st; cont <= e; cont += sk) {
        result.innerHTML += ` ${cont} -->`;
      }
    } else {
      for (let cont = st; cont >= e; cont -= sk) {
        result.innerHTML += ` ${cont} -->`;
      }
    }
    result.innerHTML += `FIM`;
  }
}
