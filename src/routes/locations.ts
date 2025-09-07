import { Router } from "express";
import { Validate } from "../middleware/validation/validate";
import { ValidateCreateLocation } from "../middleware/validation/validateLocation";
import { createLocation } from "../controllers/locationController";

const router = Router();

router.post(
    "/",
    ValidateCreateLocation,
    Validate,
    createLocation
);

export default router;