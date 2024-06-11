const { Pool } = require('pg');

const pool = new Pool({
  user: 'problem_gen_db_user',
  host: 'dpg-cph1qrcf7o1s738o7ud0-a.ohio-postgres.render.com',
  database: 'problem_gen_db',
  password: 'sCHvOVWmL5ZQ1XVMudIjsXtXtlMIZdKE',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
