const Joi = require('joi');
const { LabelConstant } = require('../constants');

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false, errors: { label: 'key', wrap: { label: false } } });


const signupSchema = Joi.object({
    first_name: Joi.string().required().min(2).label(LabelConstant.FIRST_NAME),
    last_name: Joi.string().allow('').label(LabelConstant.LAST_NAME),
    email: Joi.string().required().email().label(LabelConstant.EMAIL),
    password: Joi.string().required().min(6).label(LabelConstant.PASSWORD)
});

const loinSchema = Joi.object({
    email: Joi.string().required().email().label(LabelConstant.EMAIL),
    password: Joi.string().required().min(6).label(LabelConstant.PASSWORD)
});


const signupValidate = validator(signupSchema);
const loginValidate = validator(loinSchema);

module.exports = {
    signupValidate,
    loginValidate
};
