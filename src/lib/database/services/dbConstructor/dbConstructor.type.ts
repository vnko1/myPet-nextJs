export type Sort = "desc" | "asc";

export type QueryData = {
  $or?: { [name: string]: { $regex: string; $options: string } }[];
  category?: string;
  sex?: string;
  age?: string;
};
