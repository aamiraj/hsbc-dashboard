import mongoose, { Schema, models } from "mongoose";

const savingsFundSchema = new Schema(
  {
    projectTitle: {
      type: String,
      required: true,
    },
    projectSubtitle: {
      type: String,
      required: false,
    },
    projectDesc: {
      type: String,
      required: false,
    },
    projectCategory: {
      type: String,
      required: true,
      enum: ["Security", "Accomodation", "Youth"],
    },
    photoURL: {
      type: String,
      required: false,
    },
    totalToCollect: {
      type: Number,
      required: true,
    },
    alreadyCollected: {
      platform: {
        type: Number,
        required: true,
      },
      excludingPlatform: {
        type: Number,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: ["Ongoing project", "Canceled project"],
      default: "Ongoing project",
    },
    participants: {
      platforms: {
        type: Number,
        required: true,
      },
      offPlatform: {
        type: Number,
        required: true,
      },
    },
    minimumAccepted: {
      type: Number,
      required: false,
    },
    maximumAccepted: {
      type: Number,
      required: false,
    },
    applicableRate: {
      fromAmount: {
        type: Number,
        required: false,
      },
      toAmount: {
        type: Number,
        required: false,
      },
      interestRate: {
        type: Number,
        required: true,
      },
      applicablePeriod: {
        type: Number,
        required: true,
      },
      firstDueDate: {
        type: Date,
        required: true,
      },
      rateFrequency: {
        type: String,
        required: true,
      },
      release: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        required: true,
      },
    },
    display: {
      type: Boolean,
      required: true,
      default: true,
    },
    popularityTag: {
      mostRecommended: {
        type: Boolean,
        required: false,
      },
      mostPopular: {
        type: Boolean,
        required: false,
      },
      newProduct: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    confidenceIndex: {
      type: Number,
      required: true,
    },
    endOfSubscription: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const SavingsFund =
  models?.SavingsFund || mongoose.model("SavingsFund", savingsFundSchema);
export default SavingsFund;
