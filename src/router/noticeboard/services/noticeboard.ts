import database from "../../../db/db";

export const createNoticeboard = async (noticeboard: any) => {
    return await database("noticeboards").insert(noticeboard).returning("*");
};

export const getNoticeboardById = async (id: number) => {
    return await database("noticeboards").where({ id }).first();
};

export const getAllNoticeboards = async () => {
    return await database("noticeboards").select("*");
};

export const updateNoticeboard = async (id: number, noticeboard: any) => {
    return await database("noticeboards").where({ id }).update(noticeboard).returning("*");
};

export const deleteNoticeboard = async (id: number) => {
    return await database("noticeboards").where({ id }).del();
};
