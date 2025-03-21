import express from "express";
import routes from "./routes.js";

const servente = express();

servente.use("/", routes);

servente.listen(3322, () =>{
    console.log("O servidor irá furunfariar! 🤞");
});

