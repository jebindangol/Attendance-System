import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";
import users from "../db/db";
import { responder, errorChecker } from "./responder";
const env_path =
    process.env.NODE_ENV == "prod" ? `.env.${process.env.NODE_ENV}` : ".env";

dotenv.config({ path: path.resolve(env_path) });

const auth = async (req: any, res: any, next: any) => {
    let tokens = req.headers.authorization;
    if (!tokens) {
        return res.status(401).json(errorChecker(false, "Token is undefine"));
    }
    tokens = tokens.split(" ")[1];

    try {
        const token = jwt.verify(tokens, process.env.SECRET_KEY);

        const user = await users("users").where({ id: token.id }).first();
        if (!user) {
            return res
                .status(401)
                .json(errorChecker(false, "Your are not authorized"));
        }
        const role = await users("role").where({ id: token.role_id }).first();
        if (!role) {
            res.status(401).json(
                errorChecker(false, "Your role is not defined"),
            );
        }

        req.user = user;
        req.role = role;
        if (role.role_name === "Admin") {
            next();
        } else {
            res.status(401).json(errorChecker(false, "You are not authorized"));
        }
    } catch (error) {
        next(error);
    }
};

export default auth;
