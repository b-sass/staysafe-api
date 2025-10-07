import { Router } from "express";
import { createActivity, deleteActivity, updateActivity } from "../controllers/activityController";
import { ValidateCreateActivity } from "../middleware/validation/validateActivity";
import { Validate } from "../middleware/validation/validate";

const router = Router();

// Add activity
router.post(
    "/",
    ValidateCreateActivity,
    Validate,
    createActivity
)

router.put(
    "/",
    updateActivity
)

router.delete(
    "/",
    deleteActivity
)


export default router;