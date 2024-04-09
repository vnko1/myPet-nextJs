import { LinksEnum } from "@/types";

export const getUrl = (currentPath: string) => {
  let next: string | null;
  let prev: string | null;
  switch (currentPath) {
    case LinksEnum.ADD_PET_OPTION:
      next = LinksEnum.ADD_PET_DETAILS;
      prev = null;
      break;
    case LinksEnum.ADD_PET_DETAILS:
      next = LinksEnum.ADD_PET_INFO;
      prev = LinksEnum.ADD_PET_OPTION;
      break;
    case LinksEnum.ADD_PET_INFO:
      prev = LinksEnum.ADD_PET_DETAILS;
      next = null;
      break;
    default:
      next = "/";
      prev = "/";
  }

  return { next, prev };
};

export const isDisabled = (
  currentPath: string,
  options: boolean,
  details: boolean,
  info: boolean
) => {
  if (currentPath === LinksEnum.ADD_PET_OPTION) return options;
  if (currentPath === LinksEnum.ADD_PET_DETAILS) return details;
  if (currentPath === LinksEnum.ADD_PET_INFO) return info;
  return false;
};
