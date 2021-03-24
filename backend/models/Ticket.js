const mongoose = require("../database");
const validator = require("validator");

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
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    },
  },
  priority: {
    type: Number,
  },
  tickerNr: {
    type: Number,
  },
  created_at: { type: Date, required: true, default: Date.now },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
