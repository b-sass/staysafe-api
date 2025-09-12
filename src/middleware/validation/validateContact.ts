import { body } from "express-validator";

export const ValidateContactCreation = [
    body("user")
        .notEmpty().withMessage("cannot be empty")
        .isInt().withMessage("must be int"),
    body("contact")
        .notEmpty().withMessage("cannot be empty")
        .isString().withMessage("must be string")
        .trim()
        .isLength({max:32}).withMessage("max length: 32")
        .escape(),
    body("label")
        .optional()
        .isString().withMessage("must be string")
        .trim()
        .isLength({max: 32}).withMessage("max length: 32")
        .escape(),
];

export const ValidateContactDeletion = [
    body("user")
        .notEmpty().withMessage("cannot be empty")
        .isInt().withMessage("must be int"),
    body("contact")
        .notEmpty().withMessage("cannot be empty")
        .isInt().withMessage("must be int"),
];