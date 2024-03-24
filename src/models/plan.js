import mongoose, { Schema, models } from "mongoose";

const planSchema = new Schema(
  {
    planTitle: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    limitFrom: {
      type: Number,
      required: true,
    },
    limitTo: {
      type: Number,
      required: true,
    },
    minimumOfPositions: {
      type: Number,
      required: false,
    },
    bonuses: {
      type: Number,
      required: true,
    },
    limitOfLeverage: {
      type: String,
      required: false,
    },
    blockedDuring: {
      type: Number,
      required: true,
    },
    warranty: {
      type: Number,
      required: false,
    },
    commission: {
      type: Number,
      required: true,
    },
    accessListForInvestment: {
      type: Boolean,
      required: false,
      default: true,
    },
    passbookAccount: {
      type: Boolean,
      required: false,
      default: false,
    },
    accountStatus: {
      type: Boolean,
      required: false,
      default: true,
    },
    add: {
      type: Boolean,
      required: false,
      default: true,
    },
    displayPlanInClient: {
      type: Boolean,
      required: false,
      default: true,
    },
    generalInformation: {
      type: Boolean,
      required: false,
      default: true,
    },
    history: {
      type: Boolean,
      required: false,
      default: true,
    },
    investments: {
      type: Boolean,
      required: false,
      default: true,
    },
    totalAmountInvested: {
      type: Boolean,
      required: false,
      default: true,
    },
    totalPerformance: {
      type: Boolean,
      required: false,
      default: true,
    },
    withdraw: {
      type: Boolean,
      required: false,
      default: true,
    },
    youAdvisor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);

const Plan = models?.Plan || mongoose.model("Plan", planSchema);
export default Plan;
