import { Document } from "mongoose";
import { ArticleTypes } from "@/types";

export interface IArticle extends Document, ArticleTypes {}
