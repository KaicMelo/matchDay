import Knex from  'knex';

export async function up(knex: Knex)
{
    return knex.schema.createTable('md_users', table => {
        table.increments('id').primary();
        table.string('image').nullable();
        table.string('name').notNullable();
        table.timestamp('created_at');
    });
}

export async function down(knex: Knex)
{
    knex.schema.dropTable('md_users');
}