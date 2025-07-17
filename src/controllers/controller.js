import Service from "../services/service.js";
import validation from "../utils/validation.js";

class Controller {
  constructor() {
    this.service = new Service();
  }

  registrarAvion = async (req, res) => {
    const { error, value } = validation.schema.validate(req.body);

    if (error) {
      return res.status(400).json({ mensaje: 'datos no válidos' });
    }

     try {
   
    await this.service.guardarOActualizarAvion(value);

    const todos = await this.service.obtenerAviones();
   
    if (todos.length <= 1) {
      return res.status(200).json({
        mensaje: 'avión registrado',
        alertas: []
      });
    }

    const avionesCercanos = await this.service.buscarAvionesCercanos(value, 500);

    return res.status(200).json({
      mensaje: 'avión registrado',
      alertas: avionesCercanos.map(a => a.id) 
    });

  } catch (err) {
    return res.status(500).json({ mensaje: err.message });
  }
};

  listarAviones = async (req, res) => {
    try {
      const aviones = await this.service.obtenerAviones();
      return res.status(200).json(aviones);
    } catch (err) {
      return res.status(500).json({ mensaje: err.message });
    }
  };
}

export default Controller;
