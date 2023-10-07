const {check, validationResult} = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");


const registerUserValidator = [
    check("firstname", "Error con firstname")
        .exists().withMessage('Property firstname not included')
        .notEmpty().withMessage('Firstname should not be empty')
        .isString().withMessage('Firstname value should be a string')
        .isLength({min: 2, max: 50}).withMessage('Firstname lenght should be between 2 to 40 characters')
        .matches(/^[a-zA-Z\s]/).withMessage('Firstname only accept letters'),
    check("lastname", "Error con lastname")
        .exists().withMessage('Property lastname not included')
        .notEmpty().withMessage('Lastname should not be empty')
        .isString().withMessage('Lastname value should be a string')
        .isLength({min: 2, max: 50}).withMessage('Lastname lenght should be between 2 to 50 characters')
        .matches(/^[a-zA-Z\s]/).withMessage('Lastname only accept letters'),
    check("email", "Error en el campo email")
        .exists().withMessage('Property email not included')
        .notEmpty().withMessage('Email should not be empty')
        .isString().withMessage('Email value should be a string')
        .isEmail().withMessage('Should be in email format')
        .isLength({min: 7, max: 50}).withMessage('Email lenght should be between 2 to 50 characters'),
    check("password", "Error en el campo password")
        .exists().withMessage('Property password not included')
        .notEmpty().withMessage('Password should not be empty')
        .isString().withMessage('Password value should be a string')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%-^&*]{8,}$/).withMessage('Password should have at least: 8 characters, one uppercase letter, one lowercase letter, and a special character'),

    validateResult,
];

const loginValidation = [
    check('email', 'Error con la propiedad email')
        .exists().withMessage('Property email not included')
        .notEmpty().withMessage('Email should not be empty')
        .isString().withMessage('Email value should be a string')
        .isEmail().withMessage('Should be in email format'),
    check('password', 'Error en el campo passsword')
        .exists().withMessage('Property password not included')
        .notEmpty().withMessage('Password should not be empty')
        .isString().withMessage('Password value should be a string'),
    validateResult
];

module.exports = {
    registerUserValidator,
    loginValidation
}

// construir una expresion regular para nombres ?