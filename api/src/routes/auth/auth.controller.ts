import { createHttpResponse } from "../../utils/createHttpResponse.js";
import { Users } from "../../database/models/users.model.js";
import { setCookie } from "../../utils/setCookie.js";
import { Request, Response } from "express";

export const authLoginController = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        Users.create(body);
        setCookie(res, { pc_username: body.pc_username });
        return res.json('user logged in successfully');
    }
    catch(err) {
        res.status(500).send(
            createHttpResponse(500, { 
                title: 'no user found with this information',
                errors: err
            })
        );
    }
}