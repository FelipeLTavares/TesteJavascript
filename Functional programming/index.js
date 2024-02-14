const aplicarOperacao = (funcaoCallback, primeiroNumero, segundoNumero) => {
  return funcaoCallback(primeiroNumero, segundoNumero);
};

const dobrar = (numero) => {
  return numero * 2;
};

const resultadoDobrado = aplicarOperacao(dobrar, 12, 6);

console.log("Retorno final da função (deve retornar 24): ", resultadoDobrado);
