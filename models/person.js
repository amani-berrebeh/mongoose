const mongoose= require ('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name:  String, required: true, // String is shorthand for {type: String}
  age: Number,
  favoritefoods:   String,
});
module.exports= mongoose.model('person',personSchema)