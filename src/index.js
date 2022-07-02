// ARRANCA APP

import app from "./app.js";
import { sequelize } from "./database/database.js"
// router.get("/projects")

const main = async () => {
    try {
        await sequelize.sync({force: false}) //  true -> elimina todo en la tabla cada vez que levanto el servidor y en false, no elimina las trablas preexistentes
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        app.listen(3000)
        console.log("Server is listening on port ", 3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

};

main()