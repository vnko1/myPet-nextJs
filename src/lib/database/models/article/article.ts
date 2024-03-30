import { Schema, model, models } from "mongoose";
import { IArticle } from "./article.type";

const articleSchema: Schema = new Schema(
  {
    imageUrl: String,
    title: String,
    text: String,
    date: Date,
    url: String,
  },
  { versionKey: false, timestamps: false }
);

const Article = models.article || model<IArticle>("article", articleSchema);

export default Article;
