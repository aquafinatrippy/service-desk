const router = require("express").Router();
const Ticket = require("../models/Ticket");

router.get("/tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.send(tickets);
  } catch (error) {
    res.send(error);
  }
});

router.post("/ticket", async (req, res) => {
  try {
    const ticket = new Ticket({
      title: req.body.title,
      description: req.body.description,
      email: req.body.email,
      priority: req.body.priority,
      tickerNr: req.body.tickerNr,
    });
    await ticket.save();
    res.send(ticket);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/ticket/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    res.send(ticket);
  } catch (error) {
    res.send(error);
  }
});

router.put("/ticket/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        email: req.body.email,
        priority: req.body.priority,
      },
      { new: true }
    );
    res.send(ticket);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
