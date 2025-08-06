import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class UserLocation extends Model {
    declare userID: number;
    declare locationID: number;
}

UserLocation.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        locationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'from',
        },
    },
    {
        sequelize,
        modelName: "UserLocation",
        tableName: "user_locations",
        timestamps: false,
    }
);

export { UserLocation };