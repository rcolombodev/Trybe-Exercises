const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localHost',
  user: 'root',
  password: 'Dazoo387424!',
  database: 'users',
})