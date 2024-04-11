import React from "react";

export const revalidate = 5;

const getTime = async () => {
  const res = await fetch(
    "https://worldtimeapi.org/api/timezone/America/Chicago"
    // { next: { revalidate: 5 }, cache: "no-store" }
  );
  return await res.json();
};

async function ServerTime() {
  const time = await getTime();

  return (
    <div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2">
        {time.datetime}
      </h1>
    </div>
  );
}

export default ServerTime;
