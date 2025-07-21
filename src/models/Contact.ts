import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Contact extends Model {
    declare user: number;
    declare contact: number;
    declare label: string;
}

Contact.init(
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
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Contacts",
        tableName: "contacts",
        timestamps: false,
        
    }
);

export { Contact };