import Sequelize from "sequelize";
export const sequelize = new Sequelize('projectsdb', 'postgres', 'newpassword', {
  host: 'localhost',
  dialect: 'postgres' 
});

const { Project, Task } = sequelize.models;

// Project.hasMany(Task, { sourceKey: 'id', foreignKey: 'projectId' });
// Task.belongsTo(Project, { target: 'id', foreignKey: 'taskId' });