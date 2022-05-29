const mariadb = require("mariadb");
const dotenv = require("dotenv");

dotenv.config();

const poll = mariadb.createPool({
  host: "localhost",
  database: "intelectah",
  user: 'root',
  password: '123456',
  port: 3306,
});

module.exports = poll;