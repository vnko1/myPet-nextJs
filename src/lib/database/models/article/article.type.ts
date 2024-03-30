import { ArticleTypes } from "@/types";
import { Document } from "mongoose";

export interface IArticle extends Document, ArticleTypes {}
