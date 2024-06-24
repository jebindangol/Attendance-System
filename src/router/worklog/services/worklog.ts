import database from "../../../db/db";

export const createWorklog = async (worklog: any) => {
    return await database("worklogs").insert(worklog).returning("*");
};

export const getWorklogById = async (id: number) => {
    return await database("worklogs").where({ id }).first();
};

export const getAllWorklogs = async () => {
    return await database("worklogs").select("*");
};

export const updateWorklog = async (id: number, worklog: any) => {
    return await database("worklogs").where({ id }).update(worklog).returning("*");
};
