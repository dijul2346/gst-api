import mongoose from "mongoose";

const taxCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  // ✅ ADD THIS: A simple, unique code like "GST18"
  code: { type: String, required: true, unique: true }
});

export default mongoose.model("TaxCategory", taxCategorySchema);