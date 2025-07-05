import { Activity, ActivityModel } from "../models/activities";

export const getAllActivities = async () => {
  return await Activity.findAll();
};

export const getActivityById = async (id: number) => {
  return await Activity.findByPk(id);
};

export const createActivity = async (activity: ActivityModel) => {
  await Activity.create({ ...activity });
};

export const updateActivity = async (id: number, activity: ActivityModel) => {
  let a = await Activity.findByPk(id);
  a?.set({ ...activity });
};

export const deleteActivity = async (id: number) => {
  await Activity.destroy({ where: { id } });
};
