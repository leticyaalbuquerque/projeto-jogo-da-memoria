/*  Feito por Letícia Rodrigues
    link para o github:  */

const baralho = [
  {
    nome: "abacate",
    img: "./img/abacate.png",
  },
  {
    nome: "abacaxi",
    img: "./img/abacaxi.png",
  },
  {
    nome: "banana",
    img: "./img/banana.png",
  },
  {
    nome: "cereja",
    img: "./img/cereja.png",
  },
  {
    nome: "framboesa",
    img: "./img/framboesa.png",
  },
  {
    nome: "kiwi",
    img: "./img/kiwi.png",
  },
  {
    nome: "morango",
    img: "./img/morango.png",
  },
  {
    nome: "limao",
    img: "./img/limao.png",
  },
  {
    nome: "laranja",
    img: "./img/laranja.png",
  },
  {
    nome: "abacate",
    img: "./img/abacate.png",
  },
  {
    nome: "abacaxi",
    img: "./img/abacaxi.png",
  },
  {
    nome: "banana",
    img: "./img/banana.png",
  },
  {
    nome: "cereja",
    img: "./img/cereja.png",
  },
  {
    nome: "framboesa",
    img: "./img/framboesa.png",
  },
  {
    nome: "kiwi",
    img: "./img/kiwi.png",
  },
  {
    nome: "morango",
    img: "./img/morango.png",
  },
  {
    nome: "limao",
    img: "./img/limao.png",
  },
  {
    nome: "laranja",
    img: "./img/laranja.png",
  },
];

const grade = document.getElementById("grade");
const mensagem = document.getElementById("mensagem");
const btnJogarNovamente = document.getElementById("btn-jogar-novamente");
let escolhidas = [];
let ponto = 0;

baralho.sort(() => {
  return 0.5 - Math.random();
});

function criarGrade() {
  for (let i = 0; i < baralho.length; i++) {
    let carta = document.createElement("img");
    carta.id = i;
    carta.name = baralho[i].nome;
    carta.src = "./img/verso.png";
    carta.addEventListener("click", escolherCarta);
    grade.appendChild(carta);
    grade.classList.add("drop-shadow-md");
  }
}

function escolherCarta() {
  let carta = this;
  carta.src = baralho[carta.id].img;
  escolhidas.push(carta);

  carta.classList.add("flip");
  carta.removeEventListener("click", escolherCarta); 

  if (escolhidas.length === 2) {
    let carta1 = escolhidas[0];
    let carta2 = escolhidas[1];

    if (carta1.name === carta2.name) {
      setTimeout(() => {
        carta1.classList.add("opacity-70");
        carta2.classList.add("opacity-70");
        carta2.removeEventListener("click", escolherCarta);
      }, 300);
      ponto++;
    } else {
      setTimeout(() => {
        carta1.classList.remove("flip");
        carta2.classList.remove("flip");
        carta1.src = "./img/verso.png";
        carta2.src = "./img/verso.png";
        carta1.addEventListener("click", escolherCarta);
        carta2.addEventListener("click", escolherCarta);
      }, 1000);
    }

    if (ponto === baralho.length / 2) {
      grade.classList.add("hidden");
      mensagem.innerHTML =
        "Parabéns!<br> Você conseguiu encontrar todos os pares. 🥳";
      btnJogarNovamente.classList.remove("hidden");
    }
    escolhidas = [];
  }
}

btnJogarNovamente.addEventListener("click", () => {
  location.reload();
});
