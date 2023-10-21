const { Pool } = require("pg");
require("dotenv").config();
``;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
pool
  .connect()
  .then((client) => {
    console.log("Terhubung ke dalam database");
    client.release(); // Melepaskan koneksi setelah menggunakan
  })
  .catch((error) => {
    console.error("Gagal terhubung ke dalam database:", error);
  });
module.exports = pool;