import mongoose, { Schema, models } from "mongoose";

const moneyRecievedSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Waiting for payment", "Payment recieved", "Canceled"],
      default: "Waiting for payment",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Bank transfer", "Credit card", "Debit card"],
      default: "Bank transfer",
    },
    planTitle: {
      type: String,
      required: true,
    },
    bonuses: {
      type: Number,
      required: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    attribution: {
      type: String,
      required: false,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
  },
  { timestamps: true }
);

const MoneyRecieved =
  models?.MoneyRecieved || mongoose.model("MoneyRecieved", moneyRecievedSchema);
export default MoneyRecieved;
