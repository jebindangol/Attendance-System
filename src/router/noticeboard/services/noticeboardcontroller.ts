import { Request, Response, NextFunction } from "express";
import { createNoticeboard, getNoticeboardById, getAllNoticeboards, updateNoticeboard, deleteNoticeboard } from "./noticeboard";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newNoticeboard = await createNoticeboard(req.body);
        res.status(201).json(responder(true, "Noticeboard Created", newNoticeboard));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const noticeboard = await getNoticeboardById(Number(req.params.id));
        if (noticeboard) {
            res.status(200).json(responder(true, "Noticeboard Found", noticeboard));
        } else {
            res.status(404).json(responder(false, "Noticeboard Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const noticeboards = await getAllNoticeboards();
        res.status(200).json(responder(true, "Noticeboards Retrieved", noticeboards));
    } catch (error) {
        next(error);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedNoticeboard = await updateNoticeboard(Number(req.params.id), req.body);
        res.status(200).json(responder(true, "Noticeboard Updated", updatedNoticeboard));
    } catch (error) {
        next(error);
    }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteNoticeboard(Number(req.params.id));
        res.status(200).json(responder(true, "Noticeboard Deleted"));
    } catch (error) {
        next(error);
    }
};
