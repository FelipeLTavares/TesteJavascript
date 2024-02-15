## Conceitos importantes em Javascript

1. Espoco de variáveis
  - As palavras reservadas 'var', 'let' e 'const' são utilizadas no JavaScript para declarar variáveis. Enquanto 'const' e 'let' possuem escopo de bloco, ou seja, só podem ser acessadas dentro do bloco onde foram definidas, 'var' pode ter escopo global ou de função. Isso implica que se 'var' for declarada dentro de uma função, seu escopo será limitado a essa função; se for declarada fora de qualquer função, poderá ser acessada globalmente.
  - Variáveis declaradas fora de qualquer função são consideradas globais e podem ser acessadas de qualquer lugar no código.
  - Variáveis declaradas dentro de uma função são acessíveis apenas dentro dessa função, tornando-as variáveis locais.
  - Variáveis declaradas com let e const têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco em que foram declaradas.

2. Hoisting
  - Hoisting é o comportamento padrão do JavaScript de mover declarações para o topo (w3schools).
  - Somente é declaração da variável é "içada", não o valor que foi atribuído posteriormente a ela

3. Javascript Assincrono
  - A programação assíncrona é uma técnica que permite que seu programa inicie uma tarefa potencialmente de longa duração e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que essa tarefa seja concluída. (MDN WEB DOCS)
  - Atualmente o javascript dispõe de um método muito útil para lidar com funções que demandam tempo para concluir sua execução: async / await

4. Higher Order Functions
  - Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função. (Felipe Nascimento - 2021)
  - Muito útil quando a parte variável de uma função maior for justametne a função que deve ser executada naquele momento.
  - A função que é passada como parametro é chamada de "callback".

5. Imutabilidade
  - Em questão de imutabilidade, variáveis declaradas com 'var' e 'let' podem ter seu valor modificado, já as variáveis 'const' não. 'const' é usada para declarar constantes. 
  - Vale ressaltar que mesmo que o valor de uma 'const' não mude, se o que tiver sido atribuído a ela for um referência, então podemos 'realizar mudanças' na 'const' (se for um array, por exemplo, pode adicionar mais elementos ou excluí-los)

6. Design Patterns
  - Singleton: É um padrão que garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para essa instância.
  - Observer: É um padrão que estabelece uma relação entre classes, de modo que um classe central consegue notificar um conjunto de outras classas relacionadas a ela toda vez que a central passa por algum evento.
