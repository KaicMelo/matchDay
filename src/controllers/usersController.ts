import { Request, Response } from 'express';
import knex from '../database/connection';
import crypto from 'crypto';

class usersController {

    async index(req: Request, res: Response) {
        const users = await knex('md_users').select('*');

        if (!users) {
            return res.status(400).json({ message: "Users not found" });
        }

        return res.json(users);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const users = await knex('md_users').where('id', id).first();

        if (!users) {
            return res.status(400).json({ message: "User not found" });
        }

        return res.json(users);
    }

    async create(req: Request, res: Response) {

        const {
            name,
            image,
            email,
            login,
            password,
        } = req.body;

        const passwordMd5 = crypto.createHash("md5").update(password).digest('hex')

        const trx = await knex.transaction();
        const users = {
            name,
            login,
            password: passwordMd5
        };

        const insertedIds = await trx('md_users').insert(users);

        await trx.commit();

        return res.json({
            ...users
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const trx = await knex.transaction();

        const user = await knex('md_users').where('id', id).delete();

        await trx.commit();

        if (!user) {
            return res.status(400).json({ message: "Error" });
        }

        return res.send({ user });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        
        const trx = await knex.transaction();

        const user = await knex('md_users').where('id', id).update(data);

        await trx.commit();

        if (!user) {
            return res.status(400).json({ message: "Error" });
        }
        
        return res.send({ user });
    }
}

export default usersController;