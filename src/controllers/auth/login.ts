import {Request, Response} from "express";
import {Users} from "../../models/UserSchema";

export const login = async (req: Request, res: Response) => {
    Users.findOne({email: req.body.email}, function (err: ErrorConstructor, doc: object) {
        if (doc) {
            res.send(doc)
        }

        res.send("Not found")
    });
}
