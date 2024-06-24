import { Request, Response, NextFunction } from "express";
import { createEvent, getEventById, getAllEvents, updateEvent, deleteEvent } from "./event";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newEvent = await createEvent(req.body);
        res.status(201).json(responder(true, "Event Created", newEvent));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = await getEventById(Number(req.params.id));
        if (event) {
            res.status(200).json(responder(true, "Event Found", event));
        } else {
            res.status(404).json(responder(false, "Event Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await getAllEvents();
        res.status(200).json(responder(true, "Events Retrieved", events));
    } catch (error) {
        next(error);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedEvent = await updateEvent(Number(req.params.id), req.body);
        res.status(200).json(responder(true, "Event Updated", updatedEvent));
    } catch (error) {
        next(error);
    }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteEvent(Number(req.params.id));
        res.status(200).json(responder(true, "Event Deleted"));
    } catch (error) {
        next(error);
    }
};
