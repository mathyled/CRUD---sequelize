import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js";
import {Task} from  "./Task.js"


export const Project = sequelize.define("Project", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
},{ timestamps: false});


Project.hasMany(Task, { 
    sourceKey: 'id',
    foreignKey: 'projectId' });
    Task.belongsTo(Project, {
       target: 'id', 
       foreignKey:  'projectId' });