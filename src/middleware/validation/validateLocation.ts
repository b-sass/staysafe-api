import { body, param } from "express-validator";

export const ValidateCreateLocation = [
    body("userID")
        .isInt().withMessage("must be int")
        .notEmpty().withMessage("cannot be empty")
        .escape(),
    body('name')
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("latitude")
        .optional({values: "null"})
        .default(null)
        .isFloat().withMessage("must be float"),
    body("longitude")
        .optional({values: "null"})
        .default(null)
        .isFloat().withMessage("must be float"),
];

export const ValidateDeleteLocation = [
    body("id")
        .isInt().withMessage("must be int")
        .notEmpty().withMessage("cannot be empty")
        .escape()
]