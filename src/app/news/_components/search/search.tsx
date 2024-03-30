"use client";

import { SearchField } from "@/components";
import { FC } from "react";
import { SearchProps } from "./search.type";

const Search: FC<SearchProps> = ({ classNames }) => {
  return <SearchField classNames={classNames} />;
};

export default Search;
