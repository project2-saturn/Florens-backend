const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  image: { data: Buffer ,
  contentType:String },
  imageURL : {type: String, 'default': ""}, 
  email: {type: String ,required:true},
  password: {type:String},
  plantOwner : {type:Array, 'default':[]},
  library : [{type:Schema.Types.ObjectId, ref:'Plant', 'default':[]}]
});


UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
