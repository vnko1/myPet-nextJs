"use client";
import React from "react";

import { RouteModal } from "@/components";

function PetModalPage({ params }: { params: { id: string } }) {
  return (
    <RouteModal classNames="h-[100px]">
      <p>PetModalPage : {params.id}</p>
    </RouteModal>
  );
}

export default PetModalPage;
