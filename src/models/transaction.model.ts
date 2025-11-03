import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  userId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  amount: number;
}

const transactionSchema = new Schema<ITransaction>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "TaxCategory", required: true },
  amount: { type: Number, required: true }
});

export default mongoose.model<ITransaction>("Transaction", transactionSchema);
