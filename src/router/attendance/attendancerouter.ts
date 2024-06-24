import express from 'express';
import {
    create,
    getOne,
    getAll
} from "../attendance/services/attendancecontroller";

const router = express.Router();

router.post("/", create);
router.get("/:id", getOne);
router.get("/", getAll);

export  default router;
