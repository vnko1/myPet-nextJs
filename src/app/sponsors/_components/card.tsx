import React from "react";
import { ISponsor } from "@/types";

const Card = ({ data: { title } }: { data: ISponsor }) => {
  return <div>{title}</div>;
};

export default Card;
