import { Router } from "express";
import { createActivity, updateActivity } from "../controllers/activityController";
import { ValidateActivityCreate, ValidateActivityUpdate } from "../middleware/validation/validateActivity";
import { Validate } from "../middleware/validation/validate";

const router = Router();

// Add activity
router.post(
    "/",
    ValidateActivityCreate,
    Validate,
    createActivity
)

router.put(
    "/:id/",
    ValidateActivityUpdate,
    Validate,
    updateActivity
)


export default router;