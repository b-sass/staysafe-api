import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface ActivityLocationModel extends Model {
    activity: number,
    from: number,
    to: number,
}

const ActivityLocation = connection.define(
    "activity_locations",
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
        tableName: "activity_locations",
        timestamps: false,
    }
)

export { ActivityLocation, ActivityLocationModel };
