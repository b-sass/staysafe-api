import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Location extends Model {
    declare id: number;
    declare lat: number;
    declare long: number;
    declare address: number;
}

Location.init(
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
        sequelize,
        modelName: "Location",
        tableName: "locations",
    }
);

export { Location };
