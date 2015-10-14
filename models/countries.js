var mongoose = require('mongoose');


var CountrySchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  about: {type: String}
})


module.exports = mongoose.model('Country', CountrySchema)
