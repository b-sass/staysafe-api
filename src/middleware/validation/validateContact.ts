import { body } from "express-validator";

export const ValidateContactDetails = [
    body("user")
        .notEmpty().withMessage("cannot be empty")
        .isInt(),
    body("contact")
        .notEmpty().withMessage("cannot be empty")
        .isInt(),
    body("label")
        .optional()
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({min: 4, max: 32}).withMessage("min length: 4, max length: 32")
        .escape(),
];