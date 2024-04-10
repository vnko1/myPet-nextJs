import { InputHTMLAttributes } from "react";
import { IconEnum } from "@/types";
import { AlignIconType } from "@/components/buttons/uibutton/uibutton.type";

export type RadioButtonProps = {
  name: string;
  label: string;
  classNames?: string;
  icon?: IconEnum;
  alignIcon?: AlignIconType;
  iconSize?: number;
  iconColors?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
