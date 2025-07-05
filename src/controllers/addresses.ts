import { Address, AddressModel } from "../models/addresses";

export const getAllAddresses = async () => {
  return await Address.findAll();
};

export const getAddressById = async (id: number) => {
  return await Address.findByPk(id);
};

export const createAddress = async (address: AddressModel) => {
  await Address.create({ ...address });
};

export const updateAddress = async (id: number, address: AddressModel) => {
  let a = await Address.findByPk(id);
  a?.set({ ...address });
};

export const deleteAddress = async (id: number) => {
  await Address.destroy({ where: { id } });
};
