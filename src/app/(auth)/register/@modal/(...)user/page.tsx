"use client";

import { useRouter } from "next/navigation";
import React from "react";

function ModalPage() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.refresh();
      }}
    >
      Close
    </button>
  );
}

export default ModalPage;
