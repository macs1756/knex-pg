

 const knex = require('knex')({
  client: 'pg',
  connection: {
    connectionString: 'postgres://postgres:admin@127.0.0.1:4444/vapping360',
    ssl: false,
  },
 });

 

module.exports = {
  knex
}
