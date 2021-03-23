const router = require("express").Router();
const Ticket = require("../models/Ticket");
//all users
router.get("/tickets", async (req, res) => {
    const users = await Ticket.find({});
    res.send(users);
});

module.exports = router;