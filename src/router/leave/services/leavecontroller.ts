import { Request, Response, NextFunction } from "express";
import { createLeave, getLeaveById, getAllLeaves, updateLeave, deleteLeave } from "./leave";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newLeave = await createLeave(req.body);
        res.status(201).json(responder(true, "Leave Created", newLeave));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leave = await getLeaveById(Number(req.params.id));
        if (leave) {
            res.status(200).json(responder(true, "Leave Found", leave));
        } else {
            res.status(404).json(responder(false, "Leave Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leaves = await getAllLeaves();
        res.status(200).json(responder(true, "Leaves Retrieved", leaves));
    } catch (error) {
        next(error);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedLeave = await updateLeave(Number(req.params.id), req.body);
        res.status(200).json(responder(true, "Leave Updated", updatedLeave));
    } catch (error) {
        next(error);
    }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteLeave(Number(req.params.id));
        res.status(200).json(responder(true, "Leave Deleted"));
    } catch (error) {
        next(error);
    }
};
