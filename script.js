//Declarando const's

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const btnHabilidades = document.getElementById("btn-habilidades");
const contentHabilidades = document.getElementById("content-habilidades")
const btnProjetos = document.getElementById("btn-projetos");
const contentProjetos = document.getElementById("content-projetos")
const btnSobremim = document.getElementById("btn-sobremim");
const contentSobremim = document.getElementById("content-sobremim")

//Declarando arrays

const inputBtn = [
  btnHabilidades,
  btnProjetos,
  btnSobremim
];

const outputBtn = [
  contentHabilidades,
  contentProjetos,
  contentSobremim
];

//Função do modal

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
  console.log("click");
};

//Função de Ação do modal

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

//Função ir para elemento desejado

inputBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const catchIndex = inputBtn.indexOf(el);
    outputBtn.at(catchIndex).scrollIntoView();
  })
})
