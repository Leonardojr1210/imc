function calcularIMC(event) {
  event.preventDefault();

  const peso = +document.querySelector("#peso").value;
  let altura = +document.querySelector("#altura").value;
  const resultado = document.querySelector("#resultado");

  // Convertendo altura para metros, caso esteja em centímetros
  altura = altura / 100;

  // Calculando o IMC usando a fórmula
  let imc = peso / (altura * altura);

  // Arredondando o IMC para duas casas decimais
  imc = imc.toFixed(2);

  modalImc(+imc);

  return (resultado.value = imc);
}

function modalImc(imc) {
  const modal = document.querySelector("#modal");
  const btnClose = document.querySelector("#closeModal");
  const textModal = document.querySelector("#textModal");

  switch (true) {
    case imc >= 18 && imc <= 25:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-success">${imc}</strong>. Você está no Peso`;
      break;
    case imc >= 26 && imc <= 30:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-warning">${imc}</strong>. Você está com sobrepeso, indicamos que você procure um médico.`;
      break;
    case imc >= 31 && imc <= 41:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-danger">${imc}</strong>. Você está com obesidade, indicamos que você procure um médico.`;
      break;
    case imc >= 41:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-danger">${imc}</strong>. Você está com obesidade morbida, indicamos que você procure um médico.`;
      break;
    default:
      null;
  }

  modal.style.cssText = `
    display: block; 
    opacity: 1;
  `;

  btnClose.addEventListener("click", () => {
    modal.style.cssText = `
      display: none; 
      opacity: 0;
    `;
  });
}
