import { Request, Response, NextFunction } from "express";
import { createPerson, getPersonById, getAllPeople, updatePerson, deletePerson } from "./people";
import { responder } from "../../../middleware/responder";

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newPerson = await createPerson(req.body);
        res.status(201).json(responder(true, "Person Created", newPerson));
    } catch (error) {
        next(error);
    }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const person = await getPersonById(Number(req.params.id));
        if (person) {
            res.status(200).json(responder(true, "Person Found", person));
        } else {
            res.status(404).json(responder(false, "Person Not Found"));
        }
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const people = await getAllPeople();
        res.status(200).json(responder(true, "People Retrieved", people));
    } catch (error) {
        next(error);
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedPerson = await updatePerson(Number(req.params.id), req.body);
        res.status(200).json(responder(true, "Person Updated", updatedPerson));
    } catch (error) {
        next(error);
    }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deletePerson(Number(req.params.id));
        res.status(200).json(responder(true, "Person Deleted"));
    } catch (error) {
        next(error);
    }
};
