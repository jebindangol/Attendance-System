import database from "../../../db/db";

export const createEvent = async (event: any) => {
    return await database("events").insert(event).returning("*");
};

export const getEventById = async (id: number) => {
    return await database("events").where({ id }).first();
};

export const getAllEvents = async () => {
    return await database("events").select("*");
};

export const updateEvent = async (id: number, event: any) => {
    return await database("events").where({ id }).update(event).returning("*");
};

export const deleteEvent = async (id: number) => {
    return await database("events").where({ id }).del();
};
