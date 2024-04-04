import { Document } from "mongoose";
import { NoticesTypes } from "@/types";

export interface INotice extends Document, NoticesTypes {}
