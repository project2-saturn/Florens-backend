const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  image: { type: String },
  email: {type: String},
  password: {type:String},
  subscribed : {type:Array, 'default':[]},
  subscribed : {type:Array, 'default':[]}
});


UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
