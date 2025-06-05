import fs from "fs"

class ModelFS {
    constructor() { 
        this.path = "facturas.txt";
        
    }

    postFactura = async (factura) => {
        const facturas = await this.getFacturas();
        factura.id = facturas.length + 1;
        facturas.push(factura);
        await fs.promises.writeFile(this.path, JSON.stringify(facturas, null, 2));
        return factura;
    }
     getFacturas = async () => {
       const todasLasFacturas = await fs.promises.readFile(this.path , 'utf-8');
        return JSON.parse(todasLasFacturas)
    }
    getFacturasPorTipo = async (tipo) => {
        const facturas = await this.getFacturas();
        return facturas.filter(factura => factura.tipo === tipo);
    }
    getFacturaPorEstado = async (estado) => {
        const facturas = await this.getFacturas();
        return facturas.filter(factura => factura.estado === estado);
    }



}export default ModelFS;