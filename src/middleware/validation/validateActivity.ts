import { body } from "express-validator";

export const ValidateActivityCreate = [
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

export const ValidateActivityUpdate = [
    body("name")
        .optional()
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
        .optional()
        .isInt().withMessage("must be int"),
    body('to')
        .optional()
        .isInt().withMessage("must be int"),
    body("end")
        .optional()
        .isDate().withMessage("must be an ISO 8601 date"),
    body("status")
        .optional()
        .isString().withMessage("must be string")
        .trim()
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
];