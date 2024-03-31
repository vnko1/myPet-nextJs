import { ArticleTypes } from "@/types";
import { Articles } from "../..";

const { tryCatchWrapper, getArticlesData } = new Articles();

type Params = { query: string; page: string };

export const getArticles = tryCatchWrapper<ArticleTypes[], Params>(
  async (params: Params) => {
    params;
    const res = await getArticlesData();

    return res;
  }
);
