import mongoose, { Schema, models } from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ["admin"],
        message: "{VALUE} is not supported",
      },
      default: "admin",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    birthdate: {
      type: String,
      required: false,
    },
    lastLogInAt: {
      type: Date,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    ipAddress: {
      type: String,
      required: false,
    },
    mainAddress: {
      type: String,
      required: false,
    },
    workdays: {
      monday: {
        firstShift: { type: String, default: "09:00-13:00" },
        secondShift: { type: String, default: "14:00-18:00" },
      },
      tuesday: {
        firstShift: { type: String, default: "09:00-13:00" },
        secondShift: { type: String, default: "14:00-18:00" },
      },
      wednesday: {
        firstShift: { type: String, default: "09:00-13:00" },
        secondShift: { type: String, default: "14:00-18:00" },
      },
      thursday: {
        firstShift: { type: String, default: "09:00-13:00" },
        secondShift: { type: String, default: "14:00-18:00" },
      },
      friday: {
        firstShift: { type: String, default: "09:00-13:00" },
        secondShift: { type: String, default: "14:00-18:00" },
      },
      satureday: {
        firstShift: { type: String, default: "" },
        secondShift: { type: String, default: "" },
      },
      sunday: {
        firstShift: { type: String, default: "" },
        secondShift: { type: String, default: "" },
      },
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   const hashedPassword = await bcrypt.hash(this.password, 12);
//   this.password = hashedPassword;
//   next();
// });

const User = models.User || mongoose.model("User", userSchema);
export default User;
