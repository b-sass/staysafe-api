import { ActivityLocation, ActivityLocationModel } from "../models/activity_locations";

export const getAllActivityLocations = async () => {
  return await ActivityLocation.findAll();
};

export const getActivityLocationsByActivity = async (activity: number) => {
  return await ActivityLocation.findAll({ where: { activity } });
};

export const addActivityLocation = async (activityLocation: ActivityLocationModel) => {
  await ActivityLocation.create({ ...activityLocation });
};

export const deleteActivityLocation = async (activity: number, from: number, to: number) => {
  await ActivityLocation.destroy({ where: { activity, from, to } });
};
