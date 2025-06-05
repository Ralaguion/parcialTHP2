import Factory from "../models/Factory.js"; 

class Service {
    constructor() {
        this.numeros = Factory.get(process.env.PERSISTENCIA);
        
        }





    }export default Service;