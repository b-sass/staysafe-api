import { Request, RequestHandler, Response, Router } from "express";
import { User } from "../models/User";
const router = Router();
import { Validate, ValidateLogin, ValidateUser } from "../middleware/validate";


//Get all users
router.get("/", async (req: Request, res: Response) => {
    let users = await User.findAll();

    res.status(200).send(users);
})

// Get user by ID
router.get("/:id", async (req: Request, res: Response) => {
    let userID = req.params.id;
    try {
        let user = await User.findByPk(parseInt(userID));

        if (!user) { res.status(404).json({ error: "No user found."})}
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            error: `${err}`
        })
    }
});

router.post(
    "/",
    ValidateUser,
    Validate,
    async (req: Request, res: Response) => {
        console.log("POST: user")
        let userDetails = req.body;
        try {
            let user = await User.findOne({
                where: {
                    username: userDetails.username
                }
            });

            if (user) {
                res.status(400).json({
                    error: "User with this username already exists."
                });
                return;
            }

            await User.create({
                ...userDetails
            })

            res.status(201).json({
                message: `User ${userDetails.username} created;`
            });
        } catch (err) {
            res.status(500).json({
                error: `${err}`
            });
        }
    }
)

router.post("/login", ValidateLogin,
    async(req: Request, res: Response) => {

    }
)

export default router;