import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Location extends Model {
    declare id: number;
    declare latitude: number;
    declare longitude: number;
    declare address: number;
}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitude: {
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
        sequelize,
        modelName: "Location",
        tableName: "locations",
    }
);

export { Location };
