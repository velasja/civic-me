var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  number: {
    type: String
  },
  date: {
    type: Date
  },
  meeting: {
    type: String
  },
  backup: {
    type: String
  },
  link: {
    type: String
  },
  text: {
    type: String
  }
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
