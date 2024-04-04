import { PetsTypes } from "@/types";
import { Document } from "mongoose";

export interface IPet extends Document, PetsTypes {}
