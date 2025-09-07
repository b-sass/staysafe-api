import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { Location } from "../models/Location";
import { User } from "../models/User";
import { UserLocation } from "../models/UserLocation";

export const createLocation = async (req: Request, res: Response) => {
    let details = matchedData<{
            userID: number, name: string,
            latitude: number, longitude: number
        }>(req, {locations: ["body"]})

    try {
        let user = await User.findByPk(details.userID);

        if (!user) {
            res.status(404).json({
                error: `User ${details.userID} does not exist.`
            })
            return;
        }

        let location = await Location.create({
            name: details.name,
            latitude: details.latitude,
            longitude: details.longitude,
        })

        await UserLocation.create({
            userID: user.id,
            locationID: location.id,
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

export const deleteLocation = async (req: Request, res: Response) => {
    let details = matchedData<{
        id: number,
    }>(req, { locations: ["body"] })

    try {
        let location = await Location.findByPk(details.id);

        if (!location) {
            res.status(404).json({
                error: `Location ${details.id} does not exist.`
            })
            return;
        }

        await UserLocation.destroy({
            where: {
                locationID: location.id,
            },
        });

        await location.destroy();

        res.status(200).json({
            message: `Location ${details.id} has been permanently deleted`
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}