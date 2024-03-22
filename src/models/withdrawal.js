import mongoose, { Schema, models } from "mongoose";

const withdrawalSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    planName: {
      type: String,
      required: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    withdrawalAmount: {
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
    },
    reference: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Withdrawal = models.Withdrawal || mongoose.model("Withdrawal", withdrawalSchema);
export default Withdrawal;
