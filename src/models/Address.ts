import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Address extends Model {
    declare id: number;
    declare line_one: string;
    declare line_two?: string;
    declare county?: string;
    declare postcode: string;
    declare country: string;
}

Address.init(
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
        sequelize,
        modelName: "Address",
        tableName: "addresses",
    }
);

export { Address };