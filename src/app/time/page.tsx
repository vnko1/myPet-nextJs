"use client";

import React, { useEffect, useState } from "react";

const TimePage = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    getTime();
  }, []);

  async function getTime() {
    const res = await fetch("/time/api", {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    const dateTime = data.time;

    setTime(dateTime);
  }

  return (
    <div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2">{time}</h1>
    </div>
  );
};

export default TimePage;
