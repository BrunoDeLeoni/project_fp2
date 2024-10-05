/* Imports */
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

export class User extends Model {}

User.init(
    {
        username: DataTypes.STRING,
        userFullname: DataTypes.STRING,
        userEmail: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "User",
    }
);
