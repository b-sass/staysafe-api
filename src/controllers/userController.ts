import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { User } from "../models/User";
import sequelize from "../db";
import { QueryTypes } from "sequelize";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        let users = await User.findAll();

        if (users.length == 0) {
            res.status(404).json({
                message: "No users in the database"
            });
            return;
        }

        res.status(200).send(users);
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        })
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    let userID = req.params.id;
    try {
        let user = await User.findByPk(parseInt(userID));

        if (!user) { 
            res.status(404).json({
                error: "No user found."
            })
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        })
    }
}

export const createUser = async (req: Request, res: Response) => {
    let details = matchedData<{
        first_name: string, last_name: string,
        username: string, phone: string,
        password: string, latitude: number,
        longitude: number
    }>(req, {locations: ["body"]})

    try {
        let user = await User.findOne({
            where: {
                username: details.username
            }
        });

        if (user) {
            res.status(400).json({
                error: "User with this username already exists."
            });
            return;
        }

        await User.create({
            ...details
        })

        res.status(201).json({
            message: `User ${details.username} created;`
        });
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    let details = matchedData<{
        username: string, password: string
    }>(req, {locations: ["body"]})

    try {
        let user = await User.findOne({
            where: {
                ...details
            }
        });

        if (!user) {
            res.status(400).json({
                error: "Incorrect password"
            });
            return;
        }

        await user.destroy();
        res.status(200).json({
            message: `User ${req.body.username} deleted.`
        });
    } catch (err) {
        res.status(500).json({ 
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}

export const userLogin = async(req: Request, res: Response) => {
    let details = matchedData<{
        username: string, password: string
    }>(req, {locations: ["body"]})

    try {
        let user = await User.findOne({
            where: {
                username: details.username,
                password: details.password
            }
        });

        if (!user) {
            res.status(404).json({
                error: "Invalid username and/or password."
            });
            return;
        }
        res.status(200).json(
            user
        );
    } catch (err) {
        console.log(err)
        res.status(500).json({ 
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}

export const getUserContacts = async (req: Request, res: Response) => {
    let userID = req.params.id;
    
    try {
        let user = await User.findByPk(parseInt(userID));

        if (!user) {
            res.status(404).json({
                error: `User ${userID} not found.`
            })
            return;
        }

        let contacts = await sequelize.query("SELECT users.*, contacts.label FROM contacts RIGHT JOIN users ON contacts.contact = users.id WHERE contacts.user = :id", {
            replacements: { id: userID },
            type: QueryTypes.SELECT,
        });

        if (!contacts) {
            res.status(404).json({
                error: `User ${userID} has 0 contacts.`
            })
        }

        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ 
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}

export const getUserLocations = async (req: Request, res: Response) => {
    let userID = req.params.id;

    try {
        let user = await User.findByPk(parseInt(userID));

        if (!user) {
            res.status(404).json({
                error: `User ${userID} not found.`
            })
            return;
        }

        let locations = await sequelize.query("SELECT locations.* FROM user_locations RIGHT JOIN locations ON user_locations.locationID = locations.id WHERE user_locations.userID = :id;", {
            replacements: { id: userID },
            type: QueryTypes.SELECT,
        });

        if (!locations) {
            res.status(404).json({
                error: `User ${user.username} has no locations.`
            })
            return;
        }

        res.status(200).json({
            ...locations
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}