import mongoose from "mongoose";

const taxCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true }
});

export default mongoose.model("TaxCategory", taxCategorySchema);
