import { Articles } from "../..";

const articles = new Articles();

export const getArticles = async () => {
  try {
    const res = await articles;

    return res;
  } catch (error) {
    console.log(error);
  }
};
