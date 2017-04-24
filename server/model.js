var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  item: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
