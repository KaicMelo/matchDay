import { Request, Response } from 'express';
import knex from '../database/connection';

class teamsController {

    async index(req: Request, res: Response) {
        const games = await knex('md_teams').join('md_users', 'md_teams.id', '=', 'md_users.id').select('md_teams.id','md_users.name','md_teams.group').orderBy('group');

        if (!games) {
            return res.status(400).json({ message: "Users not found" });
        }

        return res.json(games);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const games = await knex('md_teams').join('md_users', 'md_teams.id', '=', 'md_users.id').select('md_teams.id','md_users.name','md_teams.group').where('group',id);

        if (!games) {
            return res.status(400).json({ message: "User not found" });
        }

        return res.json(games);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        
        const trx = await knex.transaction();

        const user = await knex('md_teams').where('id', id).update(data);

        await trx.commit();

        if (!user) {
            return res.status(400).json({ message: "Error" });
        }
        
        return res.send({ user });
    }
    
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const trx = await knex.transaction();
        
        const user = await knex('md_teams').where('group', id).delete();
        
        await trx.commit();

        if (!user) {
            return res.status(400).json({ message: "Error" });
        }

        return res.send({ user });
    }

  
}
export default teamsController;