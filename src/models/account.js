import mongoose, { Schema, models } from "mongoose";

const accountSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    email: {
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
    fundAvailable: {
      type: Number,
      required: true,
      default: 0,
    },
    investedAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPerformance: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
      required: true,
    },
    stockMarket: {
      commitment: {
        type: Number,
        required: false,
        default: 0,
      },
      open: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
      finalized: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
    },
    carPark: {
      commitment: {
        type: Number,
        required: false,
        default: 0,
      },
      open: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
      finalized: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
    },
    savingsFunds: {
      commitment: {
        type: Number,
        required: false,
        default: 0,
      },
      open: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
      finalized: {
        variation: {
          type: Number,
          required: false,
          default: 0,
        },
        profitOrLoss: {
          type: Number,
          required: false,
          default: 0,
        },
        nOfPositions: {
          type: Number,
          required: false,
          default: 0,
        },
      },
    },
  },
  { timestamps: true }
);

const Account =
  models.Account || mongoose.model("Account", accountSchema);
export default Account;
