import { Request, Response } from "express"
import { Activity } from "../models/Activity"
import { matchedData } from "express-validator"


export const getUserActivities = async (req: Request, res: Response) => {
    let details = matchedData<{
            userID: number
    }>(req, {locations: ["body"]})

    try {
        let activities = Activity.findAll({
            where: {
                userID: details.userID
            }
        });

        if (!activities) {
            res.status(400).json({
                message: "This user has no activities."
            });
            return;
        }

        res.status(200).json(activities)
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        })
    }
}

export const getContactActivities = (req: Request, res: Response) => {

}