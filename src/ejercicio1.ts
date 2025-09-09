interface EquipoSimple {
    nombre: string;
    tipo: string;
    estado: string;
}

class Inventario {
    private static instancia: Inventario | null = null;
    private equipos: EquipoSimple[] = [];

    private constructor() {}

    public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }

  public listarEquipos(): EquipoSimple[] {
    // devolvemos copia para no exponer la referencia interna
    return this.equipos.map(e => ({ ...e }));
  }

}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());