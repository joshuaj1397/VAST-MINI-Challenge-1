const mongoose = require('mongoose')

var reportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  time: {
    type: Date,
  },
  sewer_and_water: {
    type: Number,
  },
  power: {
    type: Number,
  },
  roads_and_bridges: {
    type: Number,
  },
  medical: {
    type: Number,
  },
  buildings: {
    type: Number,
  },
  shake_intensity: {
    type: Number,
  },
  location: {
    type: Number,
  },
})

var Report = mongoose.model('Report', reportSchema)
module.exports = Report
