import { Schema, model, models } from "mongoose";
import { IUser } from "./user.type";
import { cityRegex, defaultAvatarUrl, emailValid, phoneRegex } from "@/utils";

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailValid,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      default: "",
    },

    name: {
      type: String,
      minlength: 2,
      maxlength: 15,
      required: [true, "Set name for user"],
    },
    pets: [{ type: Schema.Types.ObjectId, ref: "pet" }],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "notice",
      },
    ],
    birthday: {
      type: Date,
      min: "1940-01-01",
      max: new Date(),
    },
    phone: { type: String, match: phoneRegex, minlength: 13 },
    city: { type: String, match: cityRegex, minlength: 2, maxlength: 30 },
    avatarUrl: { type: String, default: defaultAvatarUrl },
    avatarId: { type: String, default: "" },
    googleId: { type: String, default: "" },
    token: {
      type: String,
      default: "",
    },
    tokenLifeTime: { type: Date },
    refreshToken: { type: String, default: "" },
  },
  { versionKey: false, timestamps: false }
);

const User = models.user || model<IUser>("user", userSchema);

export default User;
