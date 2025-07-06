import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface ActivityModel extends Model {
    id?: number,
    user: number,
    name: string,
    description: string,
    start: string,
    end: string,
    status: string,
}

const Activity = connection.define(
    "activities",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "activities",
    }
)

const getAllActivities = async () => {
  return await Activity.findAll();
};

const getActivityById = async (id: number) => {
  return await Activity.findByPk(id);
};

const createActivity = async (activity: ActivityModel) => {
  await Activity.create({ ...activity });
};

const updateActivity = async (id: number, activity: ActivityModel) => {
  let a = await Activity.findByPk(id);
  a?.set({ ...activity });
};

const deleteActivity = async (id: number) => {
  await Activity.destroy({ where: { id } });
};


export { Activity, ActivityModel };
export { getAllActivities, getActivityById, createActivity, updateActivity, deleteActivity };
