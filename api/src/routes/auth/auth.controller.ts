import { createHttpResponse } from "../../utils/createHttpResponse.js";
<<<<<<< HEAD
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
=======
import { usersModel } from "../../database/models/usersModel.js";
import { dbClient } from "../../database/dbClient.js";
import { setCookie } from "../../utils/setCookie.js";
import { T_User } from "../../types/T_User.js";
import { Request, Response } from "express";
//import { and, eq } from "drizzle-orm";
import md5 from "md5";

export const authLoginController = async (req: Request, res: Response) => {
    /*const { body } = req;
    const user = (
        await dbClient
        .select()
        .from(usersModel)
        .where(and(
            eq(usersModel.usr_username, body.usr_username),
            eq(usersModel.usr_password, md5(body.usr_password.toString())),
        ))
    ) as T_User[];
    */
    //if(user.length > 0) {
        //setCookie(res, { usr_username: user[0].usr_username });
        return res.json('user logged in successfully');
    //}
    
    res.status(404).send(
        createHttpResponse(404, { 
            title: 'no user found with this information' 
        })
    );
}
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529
