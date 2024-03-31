"use client";
import { FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { SearchProps } from "./search.type";
import { ConstantsEnum } from "@/types";

import { SearchField } from "@/components";

const Search: FC<SearchProps> = ({ classNames }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onHandleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(ConstantsEnum.PAGE_PARAM, "1");
    term
      ? params.set(ConstantsEnum.QUERY_PARAM, term)
      : params.delete(ConstantsEnum.QUERY_PARAM);
    replace(pathname + "?" + params.toString());
  }, ConstantsEnum.DEBOUNCE_VALUE);

  return (
    <SearchField
      defaultValue={searchParams.get(ConstantsEnum.QUERY_PARAM)?.toString()}
      classNames={classNames}
      onHandleChange={onHandleSearch}
    />
  );
};

export default Search;
