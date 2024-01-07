import express from "express";
import cors from "cors";
import path from "path";
import UserRouter from "./routers/user-routes.js";
import TestsRouter from "./routers/tests-routes.js";
import { syncModels } from "./database/index.js";

const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());

//routes
app.use("/users", new UserRouter().getRouter());
app.use("/tests", new TestsRouter().getRouter());

//static files
app.use(express.static(path.join('frontEnd')));


app.get("/", (req, res) => {
    res.sendFile(path.join('frontEnd', 'index.html'));
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
    }
);

