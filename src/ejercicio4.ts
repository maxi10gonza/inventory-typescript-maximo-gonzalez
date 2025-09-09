class InventarioViejo {
  private items: { name: string; category: string; status: string }[] = [];

  public agregarItem(item: { name: string; category: string; status: string }): void {
    this.items.push(item);
  }

  public obtenerItems(): { name: string; category: string; status: string }[] {
    return this.items.map(i => ({ ...i }));
  }
}

class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    // Mapear a la interfaz antigua
    this.inventarioViejo.agregarItem({ name: nombre, category: tipo, status: estado });
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.inventarioViejo.obtenerItems().map(i => ({
      nombre: i.name,
      tipo: i.category,
      estado: i.status
    }));
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());

