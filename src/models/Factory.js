import Models from "./DAO/model.js";


class Factory {
    static get(persistencia) {
        switch (persistencia) {

            case 'memory':
                console.log('Using memory persistence');
                return new Models()
            default:
                throw new Error('Unknown type');
        }
    }
 
}export default Factory;