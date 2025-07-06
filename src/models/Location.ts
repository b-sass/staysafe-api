import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface LocationModel extends Model {
    id?: number,
    lat: number,
    long: number,
    address: number,
}

const Location = connection.define(
    "locations",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        long: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: 'long',
        },
        address: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "locations",
    }
);

const getAllLocations = async () => {
  return await Location.findAll();
};

const getLocationById = async (id: number) => {
  return await Location.findByPk(id);
};

const createLocation = async (location: LocationModel) => {
  await Location.create({ ...location });
};

const updateLocation = async (id: number, location: LocationModel) => {
  let l = await Location.findByPk(id);
  l?.set({ ...location });
};

const deleteLocation = async (id: number) => {
  await Location.destroy({ where: { id } });
};

export { Location, LocationModel };
export { getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation,}
