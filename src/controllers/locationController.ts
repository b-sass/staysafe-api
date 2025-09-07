import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { Location } from "../models/Location";

export const createLocation = async (req: Request, res: Response) => {
    let details = matchedData<{
            name: string, latitude: number,
            longitude: number
        }>(req, {locations: ["body"]})

    try {
        await Location.create({
            ...details
        })

        res.status(201).json({
            message: `Place ${details.name} created;`
        });
        
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}