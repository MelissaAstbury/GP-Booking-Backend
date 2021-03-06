const Joi = require("@hapi/joi");

//Register Validation
const userSignUpValidation = (data) => {
  const schema = {
    firstName: Joi.string().min(3).required(),
    surname: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    dateOfBirth: Joi.string().required(),
    address: Joi.string().required(),
    role: Joi.string().required(),
  };
  return Joi.validate(data, schema);
};

//Login Validation
const userLoginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };
  return Joi.validate(data, schema);
};

module.exports.userSignUpValidation = userSignUpValidation;
module.exports.userLoginValidation = userLoginValidation;
