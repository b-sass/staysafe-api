import { Router } from "express";
import { createActivity, deleteActivity, updateActivity } from "../controllers/activityController";

const router = Router();

// Add activity
router.post(
    "/",
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