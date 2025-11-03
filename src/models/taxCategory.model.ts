import mongoose, { Schema, Document } from "mongoose";

export interface ITaxCategory extends Document {
  name: string;
  rate: number;
}

const taxCategorySchema = new Schema<ITaxCategory>({
  name: { type: String, required: true },
  rate: { type: Number, required: true }
});

export default mongoose.model<ITaxCategory>("TaxCategory", taxCategorySchema);
