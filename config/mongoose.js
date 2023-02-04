const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/MyContactList");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("successfully connected to mongodb");
});
