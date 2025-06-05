import Controller from "../controllers/controller.js";
import express from "express";   

class Route {
    constructor() {
        this.router = express.Router();
        this.Controller = new Controller();
    }  
    start(){
        this.router.post('/facturas', this.Controller.postFactura);
        this.router.get('/facturas', this.Controller.getFacturas);
        this.router.get('/facturas/:tipo', this.Controller.getFacturasPorTipo);
        this.router.get('/facturas/estado/:estado', this.Controller.getFacturaPorEstado);
   
        return this.router;

    }

}export default Route;