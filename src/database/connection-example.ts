
import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'database'
    },
});

export default connection;
