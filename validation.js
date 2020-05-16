const Joi = require("@hapi/joi");

//Register Validation
const userSignUpValidation = (data) => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    dateOfBirth: Joi.string().required(),
    address: Joi.string().required(),
    dateCreated: Joi.date().required(),
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
