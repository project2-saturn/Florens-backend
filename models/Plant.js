const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: { type: String, required: true },
  scientificName: { type: String },
  description: {type: String},
  photosURL : {type:Array, 'default':[]},
  season: {type: Array, 'default':[]},
  location: {type: Array, 'default': []},
  type: {type: String},
  color: {type: Array, 'default':[]},
  texture: {type: String},
  form: {type: String},
  owner: {type: String},
  
});


PlantSchema.set("toObject", { virtuals: true });
PlantSchema.set("toJSON", { virtuals: true });

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;
