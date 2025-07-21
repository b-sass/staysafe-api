import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { Contact } from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
    let details = matchedData<{
        user: number, contact: number, label: string
    }>(req, {locations: ["body"]})
    
    try {
        let contact = await Contact.create({
            ...details
        })

        if (!contact) {
            res.status(401).json({
                error: "Cannot create contact"
            });
            return;
        }

        res.status(201).json({
            message: `Create contact ${details.label}`
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
                ...details
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