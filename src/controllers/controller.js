import Service from "../services/service.js";

class Controller {
    constructor(parametres){
    this.Service = new Service();
    
}

    postFactura = async (req, res) => {
        try {
            const factura = req.body;
            const nuevaFactura = await this.Service.postFactura(factura);
            res.status(201).json(nuevaFactura);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getFacturas = async (req, res) => {
        try {
            const facturas = await this.Service.getFacturas();
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    getFacturasPorTipo = async (req, res) => {
        try {
            const tipo = req.params.tipo;
            const facturasPorTipo = await this.Service.getFacturasPorTipo(tipo);
            if (facturasPorTipo.length === 0) {
                return res.status(404).json({ message: "No se encontraron facturas de este tipo" });
            }
            res.status(200).json(facturasPorTipo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    getFacturaPorEstado = async (req, res) => {
        try {
            const estado = req.params.estado;
            const facturasPorEstado = await this.Service.getFacturaPorEstado(estado);
            if (facturasPorEstado.length === 0) {
                return res.status(404).json({ message: "No se encontraron facturas con este estado" });
            }
            res.status(200).json(facturasPorEstado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }



}export default Controller;