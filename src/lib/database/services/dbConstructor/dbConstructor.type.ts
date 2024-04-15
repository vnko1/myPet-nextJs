export type Sort = "desc" | "asc";

export type QueryData = {
  $or?: { [name: string]: { $regex: string; $options: string } }[];
  category?: "sell" | "lost-found" | "in-good-hands" | "own" | "favorites";
  sex?: string[];
  age?: string;
  favorites?: { $elemMatch: { $eq: string } };
  owner?: string;
};
