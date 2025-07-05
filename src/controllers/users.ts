import { User, UserModel } from "../models/users";

export const getAllUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id: number) => {
  return await User.findByPk(id)
};

export const createUser = async (user: UserModel) => {
  await User.create({ ...user });
};

export const updateUser = async (id: number, user: UserModel) => {
  let u = await User.findByPk(id);
  u?.set({ ...user })
};

export const deleteUser = async (id: number) => {
  User.destroy({
    where: {
      id: id,
    }
  })
};
