import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "TaxCategory", required: true },
    amount: { type: Number, required: true },
    taxAmount: { type: Number, required: true },  // GST value
    totalAmount: { type: Number, required: true }, // amount + GST
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
