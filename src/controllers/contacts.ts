import { Contact, ContactModel } from "../models/contacts";

export const getAllContacts = async () => {
  return await Contact.findAll();
};

export const getContactsByUser = async (user: number) => {
  return await Contact.findAll({ where: { user } });
};

export const addContact = async (contact: ContactModel) => {
  await Contact.create({ ...contact });
};

export const deleteContact = async (user: number, contact: number) => {
  await Contact.destroy({ where: { user, contact } });
};
