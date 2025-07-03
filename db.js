import mariadb from "mariadb"

let pool = mariadb.createPool({
	host: "127.0.0.1",
	port: 3306,
	user: "staysafe",
	password: "staysafe",
	database: "staysafe"
});

export default pool
