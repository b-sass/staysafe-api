import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Activity extends Model {
    declare id: number;
    declare userID: number;
    declare name: string;
    declare description: string;
    declare start: string;
    declare end: string;
    declare status: string;
}

Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        start: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "Activity",
        tableName: "activities",
    }
);

export { Activity };