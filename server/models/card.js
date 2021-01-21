var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  cardTag: { type: String, required: true, default: "" },
  cardTags: { type: String, required: true, default: "" },
  firstName: { type: String, required: true, default: "" },
  lastName: { type: String, required: true, default: "" },
  companyName: { type: String, required: true, default: "" },
  phoneNumber: { type: Number, required: true, default: "" },
  email: { type: String, required: true, default: "" },
  address: { type: String, required: true, default: "" },
  date: { type: Date, default: Date.now },
  img: {
    data: Buffer,
    contentType: "String",
    default: "",
  },
});

module.exports = mongoose.model("Card", cardSchema);
