import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class ActivityLocation extends Model {
    declare id: number;
    declare activityID: number;
    declare from: number;
    declare to: number;
}

ActivityLocation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        activityID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        from: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'from',
        },
        to: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'to',
        },
    },
    {
        sequelize,
        modelName: "ActivityLocation",
        tableName: "activity_locations",
        timestamps: false,
    }
);

export { ActivityLocation };