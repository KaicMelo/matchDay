import Knex from 'knex';
import crypto from  'crypto';

export async function seed(knex: Knex) {
    await knex("md_score_points").insert([
        {
            md_user_id:'1',
            md_team_id: '1',

        }
    ]);
}