import { Request, RequestHandler, Response, Router } from "express";
import { User } from "../models/User";

const router = Router();

//Get all users
router.get("/", async (req: Request, res: Response) => {
    let users = await User.findAll();

    res.status(200).send(users);
})

// Get user by ID
router.get("/:id", async (req: Request, res: Response) => {
    let userID = req.params.id;
    let user = await User.findByPk(parseInt(userID));
    
    res.status(200).send(user);
});

export default router;