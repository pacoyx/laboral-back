const consign = require("consign");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({
    cwd: __dirname
})
    .include('./config/db/auroraConnection.js')
    .then('./routes/routes.js')
    .then('./init.js')
    .into(app)