import { DataTypes, Model } from "sequelize";
import connection from "../db";

interface ContactModel extends Model {
    user: number,
    contact: number,
}

const Contact = connection.define(
    "contacts",
    {
        user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        contact: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        tableName: "contacts",
        timestamps: false,
    }
)

const getAllContacts = async () => {
  return await Contact.findAll();
};

const getContactsByUser = async (user: number) => {
  return await Contact.findAll({ where: { user } });
};

const addContact = async (contact: ContactModel) => {
  await Contact.create({ ...contact });
};

const deleteContact = async (user: number, contact: number) => {
  await Contact.destroy({ where: { user, contact } });
};


export { Contact, ContactModel };
export { getAllContacts, getContactsByUser, addContact, deleteContact };
