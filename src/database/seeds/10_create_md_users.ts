import Knex from 'knex';
import crypto from  'crypto';

export async function seed(knex: Knex) {
    await knex("md_users").insert([
        {
            name: 'Kaic Melo',

        },
        {
            name: 'Marcos',

        },
        {
            name: 'Yuri',

        },
        {
            name: 'Dani',

        }
    ]);
}