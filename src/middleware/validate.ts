import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const Validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        next();
    }

    let errors: { [key: string]: string[] } = {};
    result.array().map(err => {
        if (err.type == "field") {
            if (!errors[err.path]) {
                errors[err.path] = [];
            }
            errors[err.path].push(err.msg);
        }
    });
    res.status(400).json(errors);
    return;
};

export const ValidateUser = [
    body('first_name')
        .isString().withMessage("must be string")
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("last_name")
        .isString().withMessage("must be string")
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("username")
        .isString().withMessage("must be string")
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("phone")
        .isString().withMessage("must be string")
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("password")
        .isString().withMessage("must be string")
        .notEmpty().withMessage("cannot be empty")
        .isLength({ min: 4, max: 32 }).withMessage("min length: 4, max length: 32")
        .escape(),
    body("latitude")
        .optional()
        .default(null)
        .isFloat().withMessage("must be float"),
    body("longitude")
        .optional()
        .default(null)
        .isFloat().withMessage("must be float"),
];

export const ValidateLogin = [
    body("username")
        .notEmpty().withMessage("must be string")
        .isString().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("password")
        .notEmpty().withMessage("must be string")
        .isString().withMessage("cannot be empty")
        .isLength({ min: 4, max: 32 }).withMessage("min length: 4, max length: 32")
        .escape(),
];