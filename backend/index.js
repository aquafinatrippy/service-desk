const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tickets = require("./routes/tickets");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", tickets);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});