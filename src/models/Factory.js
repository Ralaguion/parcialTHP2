import Models from "./DAO/model.js";
import ModelsFS from "./DAO/modelFS.js";


class Factory {
    static get(persistencia) {
        switch (persistencia) {

            case 'memory':
                console.log('Using memory persistence');
                return new Models()
            case 'file':
                console.log('Using file persistence');
                return new ModelsFS()    
            default:
                throw new Error('Unknown type');
        }
    }
 
}export default Factory;