const key = "d07de6f0b34e4671509dda74a2e0ee1b";

function formScreen(dados) {
  console.log(dados);
  document.querySelector(".title-city").innerHTML = `Clima em ${dados.name}`;

  if (dados.name == undefined) {
    document.querySelector(".title-city").innerHTML = `Cidade não encontrada!`;
  }

  document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}°C`;
  document.querySelector(".text-content").innerHTML =
    dados.weather[0].description;
  document.querySelector(
    ".text-umidade"
  ).innerHTML = `Umidade: ${dados.main.humidity}%`;

  if (dados.weather[0].main == "Clouds") {
    document.querySelector(".img-content").src = `./IMG/nublado.webp`;
    document.querySelector("body").style.backgroundImage = `url(./IMG/nublado-wp.webp)`;
    document.querySelector(".temp").style.color = "#4fc7c7";

  }

  if (dados.weather[0].main == "Rain") {
    document.querySelector(".img-content").src = `./IMG/chuva.webp`;
    document.querySelector("body").style.backgroundImage = `url(./IMG/chuva-wp.webp)`;
    document.querySelector(".temp").style.color = "#003289";
  }

  if (dados.weather[0].main == "Clear") {
    document.querySelector(".img-content").src = `./IMG/ensolarado.webp`;
    document.querySelector("body").style.backgroundImage = `url(./IMG/ensolarado-wp.webp)`;
    document.querySelector(".temp").style.color = "#b81414";
  }

  if (dados.weather[0].main == "Snow") {
    document.querySelector(".img-content").src = `./IMG/neve.webp`;
    document.querySelector("body").style.backgroundImage = `url(./IMG/neve-wp.webp)`;
    document.querySelector(".temp").style.color = "#483d8b";
  }

  /* document.querySelector(
    ".img-content"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`; */
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  formScreen(dados);
}

const pesquisarCidade = document.querySelector(".input-city");
pesquisarCidade.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});

function pesquisar() {
  const cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
