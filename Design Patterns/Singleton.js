// Singleton
class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  adicionarNovoLog(message) {
    this.logs.push(message);
  }

  listarLogs() {
    for (let log of this.logs) {
      console.log(log);
    }
  }
}

const logger1 = new Logger();
logger1.adicionarNovoLog("Log número 1");

const logger2 = new Logger();
logger2.adicionarNovoLog("Log número 2");

logger1.listarLogs();

console.log(logger1 === logger2); // Garantindo que é a exata mesma instancia retornada pela classe
