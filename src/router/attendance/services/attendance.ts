import database from "../../../db/db";

export const createAttendance = async (attendance: any) => {
    return await database("attendances").insert(attendance).returning("*");
};

export const getAttendanceById = async (id: number) => {
    return await database("attendances").where({ id }).first();
};

export const getAllAttendances = async () => {
    return await database("attendances").select("*");
};
