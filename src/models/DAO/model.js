
class AvionModelMemory {
  constructor() {
    this.aviones = [];
  }

  guardarOActualizar = async (nuevoAvion) => {
   
      const index = this.aviones.findIndex(avion => avion.id === nuevoAvion.id);

   if (index !== -1) {
    this.aviones[index] = nuevoAvion;
  } else {
    this.aviones.push(nuevoAvion); 
    return nuevoAvion;
  }
  }
  getAll = async () => {
    return this.aviones;
  }

  getPorId = async (id) => {
    return this.aviones.find(avion => avion.id === id);
  }

  getAvionesCercanos = async (avion, distanciaMaxima) => {
    return this.aviones.filter(a => a.id !== avion.id).filter(a => {
      const dx = a.xa - avion.xa;
      const dy = a.ya - avion.ya;
      const dz = a.za - avion.za;
      const distancia = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
      return distancia < distanciaMaxima;
    });
  }
}

export default AvionModelMemory;
