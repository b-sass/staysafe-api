import { Location, LocationModel } from "../models/locations";

export const getAllLocations = async () => {
  return await Location.findAll();
};

export const getLocationById = async (id: number) => {
  return await Location.findByPk(id);
};

export const createLocation = async (location: LocationModel) => {
  await Location.create({ ...location });
};

export const updateLocation = async (id: number, location: LocationModel) => {
  let l = await Location.findByPk(id);
  l?.set({ ...location });
};

export const deleteLocation = async (id: number) => {
  await Location.destroy({ where: { id } });
};
