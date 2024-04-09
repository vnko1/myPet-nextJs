"use client";
import React from "react";
import { useWatch } from "react-hook-form";

function Details() {
  const watch = useWatch();
  console.log(watch);
  return <div>Details</div>;
}

export default Details;
