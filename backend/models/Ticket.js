const mongoose = require("../database");

const ticketSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
  },
  tickerNr: {
    type: Number,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
