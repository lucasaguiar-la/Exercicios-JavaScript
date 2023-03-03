//Botão de lutar
function fight() {
  let hero = document.querySelector("input#hero_name");
  let atk = document.querySelector("input#hero_hit");
  let char = document.querySelector("input#char_name");
  let life = document.querySelector("input#char_life");
  let def = document.querySelector("input#char_def");
  let result = document.querySelector("p#result");
  let shield = document.querySelector("input[name=check]:checked");

  hero = hero.value;
  atk = Number(atk.value);
  char = char.value;
  life = life.value;
  def = Number(def.value);
  shield = shield.value;

  let hit = 0;

  if (shield == "sim" && atk > def) {
    hit = (atk - def) / 2;
    life = life - hit;
    result.style.fontSize = "16pt";
    result.style.paddingTop = "10px";
    result.innerHTML = `Inimigo: ${char} <br />
      Você deferiu ${hit} pontos de dano! <br />
      Dano recebido: ${hit} <br />
      Escudo: ${shield} <br />
      Defesa: ${def} <br />
      Pontos de vida restantes: ${life} <br />
      `;
  } else if (shield == "não" && atk > def) {
    hit = atk - def;
    life = life - hit;
    result.style.fontSize = "16pt";
    result.style.paddingTop = "10px";
    result.innerHTML = `Inimigo: ${char} <br />
      Você deferiu ${hit} pontos de dano! <br />
      Dano recebido: ${hit} <br />
      Escudo: ${shield} <br />
      Defesa: ${def} <br />
      Pontos de vida restantes: ${life} <br />
      `;
  } else if (atk - def) {
    result.style.fontSize = "16pt";
    result.style.paddingTop = "10px";
    result.innerHTML = `Ataque muito fraco! <br />
    Deferiu ${hit} de dano.`;
  } else {
    result.innerHTML = "Algo deu errado! Tente novamente...";
  }
}

//Botão de recarregar a página
function reload() {
  let btn = document.querySelector("img.btn_img");
  btn.onclick = window.history.go(0);
}
