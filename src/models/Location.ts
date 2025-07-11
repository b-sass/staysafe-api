import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface LocationModel extends Model {
    id?: number,
    lat: number,
    long: number,
    address: number,
}

const Location = connection.define(
    "locations",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        long: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: 'long',
        },
        address: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "locations",
    }
);

export { Location, LocationModel };
