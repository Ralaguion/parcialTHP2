import Factory from "../models/Factory.js"; 
import validation from "../utils/validation.js";

class Service {
    constructor() {
        this.aviones = Factory.get("memory");
        
        }

    guardarOActualizarAvion = async (avion) => {    
        const avionValidado = validation.schema.validate(avion);
        if (avionValidado.error) {
            throw new Error(avionValidado.error.details[0].message);
        }
        return await this.aviones.guardarOActualizar(avion);

    }
     buscarAvionesCercanos = async (avion, distanciaMaxima ) => {
     return await this.aviones.getAvionesCercanos(avion, distanciaMaxima);
     }

      obtenerAvionPorId = async (id) => {
            return await this.aviones.getPorId(id);
      }
    obtenerAviones = async () => {
        return await this.aviones.getAll();
    }



 
}export default Service;