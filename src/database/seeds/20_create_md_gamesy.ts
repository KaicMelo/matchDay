import Knex from 'knex';
import crypto from  'crypto';

export async function seed(knex: Knex) {
    await knex("md_teams").insert([
        {
            group: '1',
            md_user_id:'1'

        },
        {
            group: '1',
            md_user_id:'1',

        },
        {
            group: '2',
            md_user_id:'2',
        },
        {
            group: '2',
            md_user_id:'2',

        }
    ]);
}