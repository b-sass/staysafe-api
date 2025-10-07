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
    let activityID = req.params.id;
    let details = matchedData<{
            name?: string, description?: string, from?: number, 
            to?: number, end: Date, status: string
    }>(req, {locations: ["body"]})

    try {
        const activity = await Activity.findByPk(activityID);
        const activityLocations = await ActivityLocation.findOne({
            where: { activityID: activityID}
        })

        if (!activity || !activityLocations) {
            res.status(404).json({
                error: "Could not find activity."
            });
            return;
        }

        const activityUpdates = {
            name: details.name,
            description: details.description,
            end: details.end,
            status: details.status
        }

        const locationUpdates = {
            from: details.from,
            to: details.to
        }

        await activity.update(
            {...activityUpdates},
            { where: { id: activityID }}
        );

        await activityLocations.update(
            {...locationUpdates},
            { where: { activityID: activityID }}
        )

        res.status(200).json({
            message: `Activity ${activityID} updated`,
            updates: { 
                activityUpdates: {...activityUpdates},
                locationUpdates: {...locationUpdates}
            }
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}