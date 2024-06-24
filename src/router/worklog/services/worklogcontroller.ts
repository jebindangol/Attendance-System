import { Request, Response, NextFunction } from "express";
import { createWorklog, getWorklogById, getAllWorklogs, updateWorklog } from "./worklog";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newWorklog = await createWorklog(req.body);
        res.status(201).json(responder(true, "Worklog Created", newWorklog));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const worklog = await getWorklogById(Number(req.params.id));
        if (worklog) {
            res.status(200).json(responder(true, "Worklog Found", worklog));
        } else {
            res.status(404).json(responder(false, "Worklog Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const worklogs = await getAllWorklogs();
        res.status(200).json(responder(true, "Worklogs Retrieved", worklogs));
    } catch (error) {
        next(error);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedWorklog = await updateWorklog(Number(req.params.id), req.body);
        res.status(200).json(responder(true, "Worklog Updated", updatedWorklog));
    } catch (error) {
        next(error);
    }
};
