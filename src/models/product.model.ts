import mongoose, { Schema, Document } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true }, // Your simple product ID
  basePrice: { type: Number, required: true },
  taxCategoryId: { 
    type: Schema.Types.ObjectId,
    ref: 'TaxCategory',
    required: true,
  },
});

export default mongoose.model('Product', productSchema);