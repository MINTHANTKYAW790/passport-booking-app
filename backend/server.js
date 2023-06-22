// backend/server.js

const express = require("express");
const cors = require("cors");
const availableSlot = require("./data");

const app = express();
const port = 5000;
app.use(cors());

app.get("/available", (req, res) => {
    const choosenMonth = parseInt(req.query.month, 10);
    const availablityForChoosenDate = availableSlot.filter(
        (slot) => slot.month === choosenMonth
    );

    res.send(availablityForChoosenDate ? availablityForChoosenDate : []);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
