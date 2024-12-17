const { validationResult, check}= require("express-validator");



//validation : POST , PUT, PATCH


const validation = {
    tagValidation : [
        check('title')
        .isEmpty()
        .withMessage('title is required')
        .isString()
        .withMessage('title must be a string')
    ]
    
}





const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        const firstError = errors.array()[0].msg;
        return res.status(400).json({ message: firstError })
        }
}

module.exports = {validation,handleValidationErrors}