// Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  enviarNotificacao(data) {
    this.observers.forEach((observer) =>
      observer.mostrarNotificacaoRecebida(data)
    );
  }
}

// Observer
class Observer {
  constructor(nome) {
    this.nome = nome;
  }

  mostrarNotificacaoRecebida(data) {
    console.log(`${this.nome}: ${data}`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.adicionarObserver(observer1);
subject.adicionarObserver(observer2);
subject.adicionarObserver(observer3);

subject.enviarNotificacao("Ocorreu um evento no Subject!");
