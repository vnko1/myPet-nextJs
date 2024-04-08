export enum LinksEnum {
  HOME = "/",
  NEWS = "/news",
  PETS = "/pets",
  FRIENDS = "/friends",
  LOGIN = "/login",
  REGISTER = "/register",
  USER = "/user",
  ADD_PET = LinksEnum.USER + "/add-pet",
  ADD_PET_OPTION = LinksEnum.ADD_PET + "/option",
  ADD_PET_DETAILS = LinksEnum.ADD_PET + "/details",
  ADD_PET_INFO = LinksEnum.ADD_PET + "/info",
}
