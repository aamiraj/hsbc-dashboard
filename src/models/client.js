import mongoose, { Schema, models } from "mongoose";

const clientSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
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
        values: ["customer"],
        message: "{VALUE} is not supported",
      },
      default: "customer",
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    attribution: {
      type: String,
      required: false,
    },
    lastLogInAt: {
      type: Date,
      required: false,
    },
    campaignBy: {
      type: String,
      required: false,
    },
    countryFrom: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    postCode: {
      type: String,
      required: false,
    },
    birthDay: {
      type: Date,
      required: false,
    },
    bankName: {
      type: String,
      required: false,
    },
    iban: {
      type: String,
      required: false,
    },
    swift: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// clientSchema.pre("save", async function (next) {
//   const hashedPassword = await bcrypt.hash(this.password, 12);
//   this.password = hashedPassword;
//   next();
// });

const Client = models?.Client || mongoose.model("Client", clientSchema);
export default Client;
