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

  return (resultado.value = imc);
}
