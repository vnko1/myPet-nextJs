import { JWTPayloadType } from "@/types";

type Link = { label: string; href: string };

export interface IMenu {
  links: Link[];
  isOpen: boolean;
  pathName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: JWTPayloadType | null;
}
