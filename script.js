const colors = {
  azul: "blue",
  amarelo: "rgb(240,200,45)",
  vermelho: "red",
  verde: "green",
  roxo: "purple",
};

// Casa 1 - manipulação da seleção de cor

const selectCor1 = document.getElementById("cor1");
const changeCor1 = document.getElementById("#casa1");

// Adicione um ouvinte de eventos ao elemento de seleção de cor
selectCor1.addEventListener("change", () => {
  // Obtenha o valor selecionado do elemento de seleção de cor
  const corSelecionada = selectCor1.value;

  changeCor1.style.backgroundColor = colors[corSelecionada];
  changeCor1.style.color = "white";
  // Exiba o valor selecionado na console do navegador
  console.log(`A cor selecionada é ${corSelecionada}`);
});

// Casa 2 - manipulação da seleção de cor
const cor2 = document.querySelector("#cor2"); // seleção do elemento HTML
cor2.addEventListener("change", (event) => {
  // evento de mudança de seleção
  const corSelecionada = event.target.value; // valor da seleção
  // aqui você pode adicionar código para manipular a seleção de cor
});
