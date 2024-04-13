"use client";
import { useRouter } from "next/navigation";
import React from "react";

function PetModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div>
      PetModalPage : {params.id}
      <div>
        <button onClick={() => router.back()}>BACK</button>
      </div>{" "}
    </div>
  );
}

export default PetModalPage;
