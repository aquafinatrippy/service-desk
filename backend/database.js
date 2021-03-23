const mongoose = require("mongoose");

const dbpath = process.env.DB_STRING;

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://mongodb:27017/service-desk", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
