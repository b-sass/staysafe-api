import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class ActivityLocation extends Model {
    declare activity: number;
    declare from: number;
    declare to: number;
}

ActivityLocation.init(
    {
        activity: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        from: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'from',
        },
        to: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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