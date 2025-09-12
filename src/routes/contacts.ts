import { Router } from "express";
import { Validate } from "../middleware/validation/validate";
import { ValidateContactCreation, ValidateContactDeletion } from "../middleware/validation/validateContact";
import { createContact, deleteContact } from "../controllers/contactController";
import { validateHeaderName } from "http";


const router = Router();

router.post(
    "/",
    ValidateContactCreation,
    Validate,
    createContact
)

router.delete(
    "/",
    ValidateContactDeletion,
    Validate,
    deleteContact
)

export default router;