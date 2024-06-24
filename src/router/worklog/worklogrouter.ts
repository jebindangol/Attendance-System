import express from 'express';
import {
    create,
    getOne,
    getAll,
    update
} from "../worklog/services/worklogcontroller";

const router = express.Router();

router.post("/", create);
router.get("/:id", getOne);
router.get("/", getAll);
router.put("/:id", update);

export default router;
