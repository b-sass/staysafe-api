import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const Validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
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
    }
    next();
};

export const ValidateCreateUser = [
    body('first_name')
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("last_name")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("username")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("phone")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("password")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ min: 4, max: 32 }).withMessage("min length: 4, max length: 32")
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

export const ValidateUserDetails = [
    body("username")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape(),
    body("password")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ min: 4, max: 32 }).withMessage("min length: 4, max length: 32")
        .escape(),
];

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
]