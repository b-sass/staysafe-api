import mariadb from "mariadb"

export const pool = mariadb.createPool({
	host: process.env.DB_ADDRESS,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});