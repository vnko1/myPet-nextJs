import { Schema, model } from "mongoose";
import { ISponsor } from "..";

const sponsorSchema: Schema = new Schema(
  {
    title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    addres: String,
    phone: String,
    email: String,
    workDays: [{ isOpen: Boolean, from: String, to: String }],
  },
  { versionKey: false, timestamps: false }
);

const Sponsor = model<ISponsor>("sponsor", sponsorSchema);

export default Sponsor;
