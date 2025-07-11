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
);

export { Contact, ContactModel };