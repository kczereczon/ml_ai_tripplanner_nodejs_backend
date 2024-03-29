import { initDatabase } from "./core/database";
import dotenv from "dotenv";
import { app } from "./app";

//load env files
dotenv.config();

//initialization mongodb
let connection = initDatabase();

connection.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server running on http://localhost:" +process.env.PORT || 5000);
    });
}).catch((error) => {
    console.log(error);
});
