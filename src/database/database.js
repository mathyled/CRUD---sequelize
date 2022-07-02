import Sequelize from "sequelize";

export const sequelize = new Sequelize('projectsdb', 'postgres', 'newpassword', {
  host: 'localhost',
  dialect: 'postgres' 
});



