import Controller from "../controllers/controller.js";
import express from "express";   

class Route {
    constructor() {
        this.router = express.Router();
        this.Controller = new Controller();
    }  
    start(){
   
        return this.router;

    }

}export default Route;