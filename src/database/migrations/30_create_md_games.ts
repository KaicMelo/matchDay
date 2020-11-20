import Knex from  'knex';

export async function up(knex: Knex)
{
    return knex.schema.createTable('md_games', table => {
        table.increments('id').primary();
        table.integer('md_group_1').notNullable();
        table.integer('md_group_2').notNullable();
        table.timestamp('created_at');
    });
}

export async function down(knex: Knex)
{
    knex.schema.dropTable('md_games');
}