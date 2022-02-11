const mongoose = require("mongoose");

const recettesSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ingredients: { type: [String], required: true },
  preparation: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  usersLikes: { type: [String], default: [] },
  notes: { type: Number, default: 0 },
  usersNotes: { type: [String], default: [] },
});

module.exports = mongoose.model("Recette", recettesSchema);
