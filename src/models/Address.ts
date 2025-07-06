import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface AddressModel extends Model {
    id?: number,
    line_one: string,
    line_two?: string,
    county?: string,
    postcode: string,
    country: string,
}

const Address = connection.define(
    "addresses",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        line_one: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        line_two: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        county: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "addresses",
    }
)

const getAllAddresses = async () => {
  return await Address.findAll();
};

const getAddressById = async (id: number) => {
  return await Address.findByPk(id);
};

const createAddress = async (address: AddressModel) => {
  await Address.create({ ...address });
};

const updateAddress = async (id: number, address: AddressModel) => {
  let a = await Address.findByPk(id);
  a?.set({ ...address });
};

const deleteAddress = async (id: number) => {
  await Address.destroy({ where: { id } });
};


export { Address, AddressModel };
export { getAllAddresses, getAddressById, createAddress, updateAddress, deleteAddress };