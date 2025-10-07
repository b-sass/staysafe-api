import { Request, Response } from "express"
import { Activity } from "../models/Activity"
import { matchedData } from "express-validator"
import { ActivityLocation } from "../models/ActivityLocation"


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

export const createActivity = async (req: Request, res: Response) => {
    let details = matchedData<{
            userID: number, name: string, 
            description?: string, from: number, to: number
    }>(req, {locations: ["body"]})

    try {
        console.log({...details})

        const activity = await Activity.create({
            userID: details.userID,
            name: details.name,
            description: details.description,
            start: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        })

        const activityLocation = await ActivityLocation.create({
            activityID: activity.id,
            from: details.from,
            to: details.to
        })

        if (!activity || !activityLocation) {
            res.status(400).json({
                error: "Could not create an activity."
            })
        }

        res.status(201).json({
            message: `Activity ${activity.name} created.`
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }

    

}

export const updateActivity = async (req: Request, res: Response) => {
    
}

export const deleteActivity = async (req: Request, res: Response) => {
    
}