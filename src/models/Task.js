import { DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export const Task = sequelize.define("tasks", {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tittle: { 
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description: { 
        type: DataTypes.STRING(45),
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
},
{
    timestamps: false,
}
)
