// 1.2
const mostrarExplicacao = () => {
  console.log(
    "As palavras reservadas 'var', 'let' e 'const' são utilizadas no JavaScript para declarar variáveis. Enquanto 'const' e 'let' possuem escopo de bloco, ou seja, só podem ser acessadas dentro do bloco onde foram definidas, 'var' pode ter escopo global ou de função. Isso implica que se 'var' for declarada dentro de uma função, seu escopo será limitado a essa função; se for declarada fora de qualquer função, poderá ser acessada globalmente."
  );
};

// 1.3.1
const exemploHoisting = () => {
  console.log(`Aqui o valor de x é: ${x}`);

  var x = "teste";

  console.log(`Já aqui o valor de x é: ${x}`);
  console.log(
    "Na primeira chamada a variável ainda não havia sido definida, mas não gerou um erro por conta do hoisting, que adianta a definição da variável mas não a atribuição de seu valor."
  );
};

exemploHoisting();

// 1.3.2
const funcaoAssincrona = () => {
  console.log("Início da função assíncrona");

  setTimeout(() => {
    console.log("Função disparada após o timeout");
  }, 1000);

  console.log("Fim da função assíncrona");
  console.log(
    "O hoisting também ocorre com funções, fazendo com que sejam definidas 'adiantadamente', mas vale ressaltar que quando uma função é definida dentro de uma variável, como é comum fazer com arrow functions, a variável vai ser hoisteda, mas a função criada dentro dela não. Portanto só veremos o efeito do hoist funcionar em funções se forem declaradas usando a palavra reservada 'function'."
  );
};

funcaoAssincrona();
