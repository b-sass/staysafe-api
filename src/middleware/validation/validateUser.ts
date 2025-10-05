import { body } from "express-validator";

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

export const ValidateUserUpdate = [
    body('first_name')
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape()
        .optional(),
    body("last_name")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape()
        .optional(),
    body("username")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape()
        .optional(),
    body("phone")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ max: 32 }).withMessage("max length: 32")
        .escape()
        .optional(),
    body("password")
        .isString().withMessage("must be string")
        .trim()
        .notEmpty().withMessage("cannot be empty")
        .isLength({ min: 4, max: 32 }).withMessage("min length: 4, max length: 32")
        .escape()
        .optional(),
    body("latitude")
        .optional({values: "null"})
        .default(null)
        .isFloat().withMessage("must be float"),
    body("longitude")
        .optional({values: "null"})
        .default(null)
        .isFloat().withMessage("must be float")
        .optional(),
]