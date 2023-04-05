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

const selectCor2 = document.getElementById("cor2");
const changeCor2 = document.getElementById("#casa2");

// Adicione um ouvinte de eventos ao elemento de seleção de cor
selectCor2.addEventListener("change", () => {
  // Obtenha o valor selecionado do elemento de seleção de cor
  const corSelecionada = selectCor2.value;

  changeCor2.style.backgroundColor = colors[corSelecionada];
  changeCor2.style.color = "white";
  // Exiba o valor selecionado na console do navegador
  console.log(`A cor selecionada é ${corSelecionada}`);
});
