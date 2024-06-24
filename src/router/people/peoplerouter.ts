import express from 'express';
import {
    create,
    getOne,
    getAll,
    update,
    remove
} from "../people/services/peoplecontroller";

const router = express.Router();

router.post("/", create);
router.get("/:id", getOne);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
