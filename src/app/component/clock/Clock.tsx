"use client";

import React, { useEffect, useState } from "react";
import "./Clock.scss";

function Clock() {
  const [min, setMinutes] = useState(0);
  const [sec, setSecond] = useState(0);
  const [hrs, setHrs] = useState(12);

  useEffect(() => {
    const interval = setInterval(function () {
      const date = new Date();
      const currentHrs = date.getHours();
      const currentMinutes = date.getMinutes();
      const currentSecond = date.getSeconds();
      setMinutes(currentMinutes * 6);
      setSecond(parseInt(currentSecond * 6 + ""));
      setHrs(parseInt((currentHrs % 12) + ""));
      // console.log(`${hrs}: ${min}: ${sec}`)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [hrs, min, sec]);

  const date = new Date();
  return (
    <div className="clock">
      <div className="clockHandle">
        <div
          className="clockHandle__hrs"
          style={{
            transform: `translate(50%, 0) rotate(${
              hrs * 30 + parseInt(date.getMinutes() / 2 + "")
            }deg)`,
          }}
        ></div>
        <div
          className="clockHandle__min"
          style={{ transform: `translate(50%, 0) rotate(${min}deg)` }}
        ></div>
        <div
          className="clockHandle__sec"
          style={{ transform: `translate(50%, 0) rotate(${sec}deg)` }}
        ></div>
      </div>
      {new Array(12).fill(undefined).map((_, i) => (
        <div className={`clockNumber-${i+1}`} key={i}>
          <div className="text">{i+1}</div>
        </div>
      ))}
    </div>
  );
}

export default Clock;
