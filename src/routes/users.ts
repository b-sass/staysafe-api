import { Request, RequestHandler, Response, Router } from "express";
import { User } from "../models/User";
const router = Router();
import { Validate, ValidateLogin, ValidateUser } from "../middleware/validate";
import { matchedData } from "express-validator";


//Get all users
router.get("/", async (req: Request, res: Response) => {
    let users = await User.findAll();

    if (!users) {
        res.status(404).json({message: "No users in the database"});
        return;
    }

    res.status(200).send(users);
})

// Get user by ID
router.get("/:id", async (req: Request, res: Response) => {
    let userID = req.params.id;
    try {
        let user = await User.findByPk(parseInt(userID));

        if (!user) { 
            res.status(404).json({ error: "No user found."})
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            error: [err]
        })
    }
});

router.post(
    "/",
    ValidateUser,
    Validate,
    async (req: Request, res: Response) => {
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
                error: [err]
            });
        }
    }
)

router.post("/login",
    ValidateLogin,
    Validate,
    async(req: Request, res: Response) => {
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
                res.status(404).json({ error: "Invalid username and/or password." });
                return;
            }
            res.status(200).json({ message: "Logged in" });
        } catch (err) {
            res.status(500).json({ 
                error: [err]
            });
        }
    }
)

export default router;