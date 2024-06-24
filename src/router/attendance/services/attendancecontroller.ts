import { Request, Response, NextFunction } from "express";
import { createAttendance, getAttendanceById, getAllAttendances } from "./attendance";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newAttendance = await createAttendance(req.body);
        res.status(201).json(responder(true, "Attendance Created", newAttendance));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const attendance = await getAttendanceById(Number(req.params.id));
        if (attendance) {
            res.status(200).json(responder(true, "Attendance Found", attendance));
        } else {
            res.status(404).json(responder(false, "Attendance Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const attendances = await getAllAttendances();
        res.status(200).json(responder(true, "Attendances Retrieved", attendances));
    } catch (error) {
        next(error);
    }
};
