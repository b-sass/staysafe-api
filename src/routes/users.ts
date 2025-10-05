import { Router } from "express";
import { Validate } from "../middleware/validation/validate";
import { ValidateCreateUser, ValidateUserDetails, ValidateUserUpdate } from "../middleware/validation/validateUser";
import { createUser, deleteUser, getAllUsers, getUserContacts, getUserLocations, getUserByID, userLogin, updateUser } from "../controllers/userController";

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
    "/:id/contacts/",
    getUserContacts
)

router.get(
    "/:id/locations",
    getUserLocations
)

router.put(
    "/:id/",
    ValidateUserUpdate,
    updateUser
)

export default router;