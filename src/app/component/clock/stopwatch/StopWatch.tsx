"use client";

import React, { useEffect, useState } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    let intervalIdx = undefined;
    if (isRunning) {
      intervalIdx = setInterval(() => {
        setCurrentTime((time) => time + 1);
      }, 1);
    } else {
      clearInterval(intervalIdx);
    }
    return () => {
      if (intervalIdx) clearInterval(intervalIdx);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setCurrentTime(0);
  };

  return (
    <div>
      <button
        className="p-2 bg-red-300 border-red-600 border shadow-sm active:shadow-md m-2 rounded-lg"
        onClick={start}
      >
        Start
      </button>
      <button
        className="p-2 bg-blue-300 border-blue-600 border shadow-sm active:shadow-md m-2 rounded-lg"
        onClick={stop}
      >
        stop
      </button>
      <button
        className="p-2 bg-green-300 border-green-600 border shadow-sm active:shadow-md m-2 rounded-lg"
        onClick={reset}
      >
        reset
      </button>
      <h1>
        {parseInt(currentTime / 1000 + "")}:
        {parseInt((currentTime % 1000) + "")}
      </h1>
    </div>
  );
}

export default StopWatch;
