import Knex from  'knex';

export async function up(knex: Knex)
{
    return knex.schema.createTable('md_score_points', table => {
        table.increments('id').primary();
        table.integer('md_user_id').unsigned()
        table.foreign('md_user_id').references('md_users.id');
        table.integer('md_team_id').unsigned()
        table.foreign('md_team_id').references('md_teams.id');
        table.timestamp('created_at');
    });
}

export async function down(knex: Knex)
{
    knex.schema.dropTable('md_score_points');
}