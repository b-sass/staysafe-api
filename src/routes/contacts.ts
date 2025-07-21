import { Router } from "express";
import { Validate, ValidateContactDetails } from "../middleware/validate";
import { createContact, deleteContact } from "../controllers/contactController";
import { validateHeaderName } from "http";


const router = Router();

router.post(
    "/",
    ValidateContactDetails,
    Validate,
    createContact
)

router.delete(
    "/",
    ValidateContactDetails,
    Validate,
    deleteContact
)

export default router;