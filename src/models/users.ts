import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface UserModel extends Model {
    id?: number,
    username: string,
    first_name: string,
    last_name: string,
    phone: string,
    password: string,
}

const User = connection.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "users",
    }
)

export { User, UserModel };