import { Document } from "mongoose";
import { SponsorType } from "@/types";

export interface ISponsor extends Document, SponsorType {}
