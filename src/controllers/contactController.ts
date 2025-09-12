import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { Contact } from "../models/Contact";
import { User } from "../models/User";

export const createContact = async (req: Request, res: Response) => {
    let details = matchedData<{
        user: number, contact: string, label: string
    }>(req, {locations: ["body"]})
    
    try {
        let user = await User.findByPk(details.user)

        if (!user) {
            res.status(404).json({
                error: "No user found."
            })
            return;
        }

        let contactUser = await User.findOne({
            where: {
                username: details.contact
            }
        })

        if (!contactUser) {
            res.status(404).json({
                error: `User ${details.contact} not found.`
            })
            return;
        }

        if (user.id === contactUser.id) {
            res.status(400).json({
                error: "Cannot add yourself as a contact."
            });
            return;
        }

        if (
            await Contact.findOne({
                where: {
                    userID: details.user,
                    contactID: contactUser.id
                }
            })
        ) {
            res.status(400).json({
                error: `User ${user.username} already has a contact ${contactUser.username}.`
            })
            return;
        }

        let newContact = await Contact.create({
            userID: details.user,
            contactID: contactUser.id,
            label: details.label == null || details.label == "" ? details.contact : details.label
        })

        if (!newContact) {
            res.status(401).json({
                error: "Cannot create contact"
            });
            return;
        }

        res.status(201).json({
            message: `Created contact ${details.label}`
        });
    } catch (err) {
        res.status(500).json({ 
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}

export const deleteContact = async (req: Request, res: Response) => {
    let details = matchedData<{
        user: number, contact: number
    }>(req, {locations: ["body"]})

    try {
        let contact  = await Contact.findOne({
            where: {
                userID: details.user,
                contactID: details.contact
            }
        });

        if (!contact) {
            res.status(404).json({
                error: "Contact not found"
            });
            return;
        }

        const label = contact.label;
        contact.destroy();

        res.status(200).json({
            message: `Deleted contact "${label}"`
        })        
    } catch (err) {
        res.status(500).json({ 
            error: "Internal Server Error",
            message: `${err}`
        });
    }
}