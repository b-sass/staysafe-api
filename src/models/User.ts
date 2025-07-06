import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface UserModel extends Model {
    id?: number,
    username: string,
    first_name: string,
    last_name: string,
    phone: string,
    password: string,
}

const User = connection.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "users",
    }
);

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id: number) => {
  return await User.findByPk(id)
};

const createUser = async (user: UserModel) => {
  await User.create({ ...user });
};

const updateUser = async (id: number, user: UserModel) => {
  let u = await User.findByPk(id);
  u?.set({ ...user })
};

const deleteUser = async (id: number) => {
  User.destroy({
    where: {
      id: id,
    }
  })
};

export { User, UserModel };
export { getAllUsers, getUserById, createUser, updateUser, deleteUser };