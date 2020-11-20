import Knex from  'knex';

export async function up(knex: Knex)
{
    return knex.schema.createTable('md_teams', table => {
        table.increments('id').primary();
        table.string('group').nullable();
        table.integer('md_user_id').unsigned()
        table.foreign('md_user_id').references('md_users.id');
        table.timestamp('created_at');
    });
}

export async function down(knex: Knex)
{
    knex.schema.dropTable('md_teams');
}