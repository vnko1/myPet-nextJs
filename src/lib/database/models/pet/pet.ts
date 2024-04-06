import { Schema, model, models } from "mongoose";
import { IPet } from "./pet.type";

const petSchema: Schema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 15,
      required: [true, "Set name for pet"],
    },
    date: {
      type: Date,
      required: [true, "Set birthday date for pet"],
      min: "2000-01-01",
      max: new Date(),
    },
    type: {
      type: String,
      minlength: 2,
      maxlength: 16,
      required: true,
    },
    imageUrl: { type: String, required: true },
    comments: { type: String, maxlength: 120, default: "" },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    // fileId: { type: String, required: true },
  },
  { versionKey: false, timestamps: false }
);

const Pet = models.pet || model<IPet>("pet", petSchema);

export default Pet;
