import { Schema, model, models } from "mongoose";
import { ISponsor } from "./sponsor.type";

const sponsorSchema: Schema = new Schema(
  {
    title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    address: String,
    phone: String,
    email: String,
    workDays: [{ isOpen: Boolean, from: String, to: String }],
  },
  { versionKey: false, timestamps: false }
);

const Sponsor = models.sponsor || model<ISponsor>("sponsor", sponsorSchema);

export default Sponsor;
