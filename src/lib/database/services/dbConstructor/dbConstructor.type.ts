export type Sort = "desc" | "asc";

export type QueryData = {
  $or?: { [name: string]: { $regex: string; $options: string } }[];
  category?: "sell" | "lost-found" | "in-good-hands" | "own" | "favorite";
  sex?: string[];
  age?: string;
  favorite?: { $elemMatch: { $eq: string } };
  owner?: string;
};
