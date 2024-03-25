import mongoose, { Schema, models } from "mongoose";

const depositSchema = new Schema(
  {
    clientName: { type: String, required: true },
    clientEmail: {
      type: String,
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    planTitle: {
      type: String,
      required: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    depositAmount: {
      type: Number,
      required: true,
    },
    requestStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Approved", "Canceled"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: [
        "Bank Transfer",
        "Bank Check",
        "Credit Card",
        "Advance of SRD Funds",
        "Other",
      ],
      default: "Bank Transfer",
    },
    reference: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Deposit = models?.Deposit || mongoose.model("Deposit", depositSchema);
export default Deposit;
