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