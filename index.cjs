require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:80', 'http://localhost'],
}));

const routes = require("./routes.cjs");
app.use(routes);

const port = process.env.PORT || 443;

const server = app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})