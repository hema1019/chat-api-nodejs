const {check, validationResult} = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");


const createConversation = [
    check("userId", "Error con userId")
        .exists().withMessage('Property userId not included')
        .notEmpty().withMessage('userId should not be empty')
        .isNumeric().withMessage('userId value should be a number')
        .isLength({min: 1, max: 5}).withMessage('userId lenght should be between 1 to 5 characters')
        .matches(/^[0-9]/).withMessage('userId only accept numbers'),

    check("participantId", "Error con participantId")
        .exists().withMessage('Property participantId not included')
        .notEmpty().withMessage('participantId should not be empty')
        .isNumeric().withMessage('participantId value should be a number')
        .isLength({min: 1, max: 5}).withMessage('participantId lenght should be between 1 to 5 characters')
        .matches(/^[0-9]/).withMessage('participantId only accept numbers'),

    validateResult,
];


const createGroupConversation = [
    check("userId", "Error con userId")
        .exists().withMessage('Property userId not included')
        .notEmpty().withMessage('userId should not be empty')
        .isNumeric().withMessage('userId value should be a number')
        .isLength({min: 1, max: 5}).withMessage('userId lenght should be between 1 to 5 characters')
        .matches(/^[0-9]/).withMessage('userId only accept numbers'),

    check("participantsIds", "Error con participantsIds")
        .exists().withMessage('Property participantsIds not included')
        .notEmpty().withMessage('participantsIds should not be empty')
        .isNumeric().withMessage('participantsIds value should be a number')
        .isLength({min: 1, max: 5}).withMessage('participantsIds lenght should be between 1 to 5 characters')
        .matches(/^[0-9]/).withMessage('participantsIds only accept numbers'),

    check("title", "Error con title")
        .exists().withMessage('Property title not included')
        .notEmpty().withMessage('title should not be empty')
        .isString().withMessage('title value should be a string')
        .isLength({min: 2, max: 50}).withMessage('title lenght should be between 2 to 50 characters')
        .matches(/^[a-zA-Z\s]/).withMessage('title only accept letters'),
    
    validateResult,
];

module.exports = {
    createConversation,
    createGroupConversation
}