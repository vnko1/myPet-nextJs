import React from "react";

function PetPage({ params }: { params: { id: string } }) {
  return <div>PetPage id: {params.id}</div>;
}

export default PetPage;
