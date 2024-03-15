import mongoose, { Schema, models } from "mongoose";

const activateTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    activateAt: {
      type: Date,
      required: false,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
  },
  { timestamps: true }
);

const ActivateToken = models.ActivateToken || mongoose.model("ActivateToken", activateTokenSchema);
export default ActivateToken;
