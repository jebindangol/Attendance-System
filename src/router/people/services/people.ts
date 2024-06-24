import database from "../../../db/db";

export const createPerson = async (person: any) => {
    return await database("people").insert(person).returning("*");
};

export const getPersonById = async (id: number) => {
    return await database("people").where({ id }).first();
};

export const getAllPeople = async () => {
    return await database("people").select("*");
};

export const updatePerson = async (id: number, person: any) => {
    return await database("people").where({ id }).update(person).returning("*");
};

export const deletePerson = async (id: number) => {
    return await database("people").where({ id }).del();
};
