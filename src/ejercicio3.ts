type Estado = string;

interface Observador {
  actualizar(equipo: Equipo, estadoAnterior: Estado, nuevoEstado: Estado): void;
}

class Soporte implements Observador {
  actualizar(equipo: Equipo, estadoAnterior: Estado, nuevoEstado: Estado): void {
    console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado de ${estadoAnterior} a ${nuevoEstado}.`);
  }
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(public nombre: string, public tipo: string, private estado: Estado) {}

  public agregarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  public removerObservador(obs: Observador): void {
    this.observadores = this.observadores.filter(o => o !== obs);
  }

  public cambiarEstado(nuevoEstado: Estado): void {
    const antes = this.estado;
    this.estado = nuevoEstado;
    this.notificar(antes, nuevoEstado);
  }

  private notificar(estadoAnterior: Estado, nuevoEstado: Estado): void {
    for (const obs of this.observadores) {
      obs.actualizar(this, estadoAnterior, nuevoEstado);
    }
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

