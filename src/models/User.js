import { DataTypes } from "sequelize";
import { sequelize } from "../db/db";
import {Task} from "./Task";

export const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: { 
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: { 
        type: DataTypes.STRING(45),
        allowNull: false
    },
    password: { 
        type: DataTypes.STRING(100),
        allowNull: false
    },
},
{
    timestamps: false,
}
);

User.hasMany(Task, {
    foreignKey: "user_id",
    sourceKey: "id"
})

Task.belongsTo(User, {
    foreignKey: "user_id",
    targetId: "id"
})
