
class Models {
    constructor() {
          this.facturas = [ 
        ];
        this.id = 1;

    }

    postFactura = async (factura) => {
        factura.id = this.id++;
        this.facturas.push(factura);
        return await factura;
    }
       
    getFacturas = async () => {
        return  await this.facturas;
    }

    getFacturasPorTipo = async (tipo) => {
        return await this.facturas.filter(factura => factura.tipo === tipo);
    }
    getFacturaPorEstado = async (estado) => {
        return await this.facturas.filter(factura => factura.estado === estado);
    }



    


}export default Models;