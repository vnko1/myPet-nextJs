import { UserTypes } from "@/types";
import { Document } from "mongoose";

export interface IUser extends Document, Omit<UserTypes, "id"> {}
