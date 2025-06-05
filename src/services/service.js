import Factory from "../models/Factory.js"; 
import validation from "../utils/validation.js";

class Service {
    constructor() {
        this.facturas = Factory.get(process.env.PERSISTENCIA);
        
        }



    postFactura = async (factura) => {
        const facturaValida = validation.schema.validate(factura);
        if(facturaValida.error) {
            throw new Error("Factura no válida");
        }
        return await this.facturas.postFactura(factura);
    }

    getFacturas = async () => {
        return await this.facturas.getFacturas();
    }
    
    getFacturasPorTipo = async (tipo) => {
        return await this.facturas.getFacturasPorTipo(tipo);
    }
    getFacturaPorEstado = async (estado) => {
        return await this.facturas.getFacturaPorEstado(estado);
    }
    
    }export default Service;