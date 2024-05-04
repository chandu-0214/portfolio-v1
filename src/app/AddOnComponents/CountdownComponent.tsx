"use client";
import React, { useEffect, useState } from "react";

const CountdownComponent = ({ min, max, delay }: any) => {
  const [count, setCount] = useState(min);
  const [isLoading, setisload] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < max) {
        setCount((prevCount: any) => {
          const incrementedCount = prevCount + 0.1;
          return Math.round((incrementedCount + Number.EPSILON) * 10) / 10;
        });
        setisload(false);
      } else {
        clearInterval(interval);
      }
    }, delay || 100);

    return () => clearInterval(interval);
  }, [count, max]);

  return (
    <span>
      {isLoading ? (
        <span className="loading loading-spinner loading-sm text-designColor"></span>
      ) : (
        <span className="text-designColor">{count}+</span>
      )}
    </span>
  );
};
export default CountdownComponent;
