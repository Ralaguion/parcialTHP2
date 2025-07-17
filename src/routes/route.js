import Controller from "../controllers/controller.js";
import express from "express";   

class Route {
    constructor() {
        this.router = express.Router();
        this.Controller = new Controller();
    }  
    start(){
          this.router.post('/', this.Controller.registrarAvion);
        this.router.get('/', this.Controller.listarAviones);
   
        return this.router;

    }

}export default Route;