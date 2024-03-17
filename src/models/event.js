import mongoose, { Schema, models } from "mongoose";
import bcrypt from "bcryptjs";

const eventSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    allDay: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Event = models.Event || mongoose.model("Event", eventSchema);
export default Event;
