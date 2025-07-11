import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface AddressModel extends Model {
    id?: number,
    line_one: string,
    line_two?: string,
    county?: string,
    postcode: string,
    country: string,
}

const Address = connection.define(
    "addresses",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        line_one: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        line_two: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        county: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "addresses",
    }
);

export { Address, AddressModel };