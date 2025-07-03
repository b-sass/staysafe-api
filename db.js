import mariadb from "mariadb"

let pool = mariadb.createPool({
	host: process.env.DB_ADDRESS,
	port: process.env.DB_PORT,
	user: "staysafe",
	password: "staysafe",
	database: "staysafe"
});

export default pool