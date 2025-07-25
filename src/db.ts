import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.DB_NAME!,
	process.env.DB_USER!,
	process.env.DB_PASS,
	{
		host: process.env.DB_ADDRESS,
		dialect: 'mariadb',
		define: {
			timestamps: false,
		}
	}
)

export default sequelize;