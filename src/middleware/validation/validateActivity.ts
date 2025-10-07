import { body } from "express-validator";

export const ValidateCreateActivity = [
    body('userID')
        .isInt().withMessage("must be int"),
    body("name")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("description")
        .optional()
        .isString().withMessage("must be string")
        .trim()
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body('from')
        .isInt().withMessage("must be int"),
    body('to')
        .isInt().withMessage("must be int")
];