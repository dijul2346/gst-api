import mongoose, { Schema } from 'mongoose';

// A sub-document schema for items within a transaction
const transactionItemSchema = new Schema(
  {
    sku: { type: String, required: true }, // We store the SKU
    name: { type: String, required: true }, // Store name for convenience
    quantity: { type: Number, required: true, min: 1 },
    basePrice: { type: Number, required: true },
    taxRate: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
  },
  { _id: false }
);

// The main transaction schema
const transactionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [transactionItemSchema], // An array of items
    // Grand totals for the whole transaction
    totalSubtotal: { type: Number, required: true },
    totalGstAmount: { type: Number, required: true },
    finalTotalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);