import database from "../../../db/db";

export const createLeave = async (leave: any) => {
    return await database("leaves").insert(leave).returning("*");
};

export const getLeaveById = async (id: number) => {
    return await database("leaves").where({ id }).first();
};

export const getAllLeaves = async () => {
    return await database("leaves").select("*");
};

export const updateLeave = async (id: number, leave: any) => {
    return await database("leaves").where({ id }).update(leave).returning("*");
};

export const deleteLeave = async (id: number) => {
    return await database("leaves").where({ id }).del();
};
