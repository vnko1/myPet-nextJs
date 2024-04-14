import { Schema, model, models } from "mongoose";
import { INotice } from "./notice.type";

const noticeSchema: Schema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 16,
      required: [true, "Set name for pet"],
    },
    category: {
      type: String,
      required: true,
      enum: ["sell", "in-good-hands", "lost-found"],
    },
    date: {
      type: String,
      required: [true, "Set birthday date for pet"],
    },
    type: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 16,
    },
    imageUrl: { type: String, required: true },
    comments: {
      type: String,
      maxlength: 120,
      default: "",
    },
    title: {
      type: String,
      minlength: 3,
      maxlength: 30,
    },
    sex: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    location: {
      type: String,
      minlength: 2,
    },
    price: {
      type: Number,
      min: 1,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    // fileId: { type: String, required: true },
  },
  { versionKey: false, timestamps: false }
);

const Notice = models.notice || model<INotice>("notice", noticeSchema);

export default Notice;
