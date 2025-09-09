abstract class EquipoBase {
  constructor(public tipo: string, public nombre: string) {}
  abstract detalles(): string;
}

class Notebook extends EquipoBase {
  constructor(nombre: string, public ram: string, public procesador: string) {
    super("Notebook", nombre);
  }
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends EquipoBase {
  constructor(nombre: string, public ram: string, public procesador: string) {
    super("Desktop", nombre);
  }
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoBase {
  constructor(nombre: string, public ram: string, public procesador: string, public rackU: number = 2) {
    super("Servidor", nombre);
  }
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, RackU: ${this.rackU}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram?: string, procesador?: string, extra?: any): EquipoBase {
    switch (tipo.toLowerCase()) {
      case "notebook":
        return new Notebook(nombre, ram ?? "8GB", procesador ?? "i5");
      case "desktop":
        return new Desktop(nombre, ram ?? "8GB", procesador ?? "i5");
      case "servidor":
        return new Servidor(nombre, ram ?? "32GB", procesador ?? "Xeon", extra ?? 2);
      default:
        throw new Error(`Tipo desconocido: ${tipo}`);
    }
  }
}

const factory = new EquipoFactory();
const nb = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(nb.detalles());
