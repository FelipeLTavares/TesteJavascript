const gerarNumeroAleatorio = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numeroAleatorio = Math.random();
      resolve(numeroAleatorio);
    }, 1000);
  });
};

(async () => {
  const numeroGerado = await gerarNumeroAleatorio();
  console.log("Número gerado após 1 segundo: ", numeroGerado);
})();
