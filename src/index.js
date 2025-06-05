import express from "express";
import dotenv from "dotenv";
import Route from "./routes/route.js";


dotenv.config();

const PORT = 8080
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", new Route().start());


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);

});