import Joi from 'joi';

const schema = Joi.object({
    numero: Joi.string().required(),
    tipo: Joi.string().required().valid('A', 'B', 'C' ),
    monto: Joi.number().required().max(1000000),
    estado: Joi.string().required().valid('PENDIENTE', 'PAGADA', 'CANCELADA'),

})
export default{
    schema
}