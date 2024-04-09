"use client";
import React from "react";
import { RadioButtonField } from "@/components/fields";
const inputs = [{ label: "Your pet", name: "options", value: "your pet" }];

function Option() {
  return (
    <>
      <RadioButtonField label="Your pet" name="options" value="your pet" />
    </>
  );
}

export default Option;
