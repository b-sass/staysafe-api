import { Router } from "express";
import { Validate } from "../middleware/validation/validate";
import { ValidateCreateUser, ValidateUserDetails } from "../middleware/validation/validateUser";
import { createUser, deleteUser, getAllUsers, getContactsForUser, getUserByID, userLogin } from "../controllers/userController";

const router = Router();

router.get(
    "/",
    getAllUsers
)

router.get(
    "/:id", 
    getUserByID
);

router.post(
    "/",
    ValidateCreateUser,
    Validate,
    createUser
)

router.post(
    "/login",
    ValidateUserDetails,
    Validate,
    userLogin
)

router.delete(
    "/", 
    ValidateUserDetails,
    Validate,
    deleteUser
)

router.get(
    "/contacts/:id",
    getContactsForUser
)

export default router;