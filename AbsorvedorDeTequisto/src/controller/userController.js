import express from "express";
import routes from "./routes";

const route = express.Router();

route.get("/", (request, response) => {
    response.status(200).send("Deu contrário de errado!!!!!!!!");
});

export default route
