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
);

const getAllActivityLocations = async () => {
  return await ActivityLocation.findAll();
};

const getActivityLocationsByActivity = async (activity: number) => {
  return await ActivityLocation.findAll({ where: { activity } });
};

const addActivityLocation = async (activityLocation: ActivityLocationModel) => {
  await ActivityLocation.create({ ...activityLocation });
};

const deleteActivityLocation = async (activity: number, from: number, to: number) => {
  await ActivityLocation.destroy({ where: { activity, from, to } });
};

export { ActivityLocation, ActivityLocationModel };
export { getAllActivityLocations, getActivityLocationsByActivity, addActivityLocation, deleteActivityLocation };
