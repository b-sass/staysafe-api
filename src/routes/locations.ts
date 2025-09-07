import { Router } from "express";
import { Validate } from "../middleware/validation/validate";
import { ValidateCreateLocation, ValidateDeleteLocation } from "../middleware/validation/validateLocation";
import { createLocation, deleteLocation } from "../controllers/locationController";

const router = Router();

router.post(
    "/",
    ValidateCreateLocation,
    Validate,
    createLocation
);

router.delete(
    "/",
    ValidateDeleteLocation,
    Validate,
    deleteLocation
)

export default router;