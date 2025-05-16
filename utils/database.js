import mysql from "mysql2/promise";

const conection = await mysql.createConnection({
  host: "localhost",
  user: "dom_Santiago",
  password: "DOM",
  database: "dom_santiago",
});

export default conection;
