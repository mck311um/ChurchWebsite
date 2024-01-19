import React, { useEffect, useState } from "react";
import "../assets/style.css";

const countdownTarget = new Date("2024-12-11T23:59:59");

const calculateTimeLeft = () => {
  const totalTimeLeft = countdownTarget - new Date();
  const months = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((totalTimeLeft / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { months, days, hours, minutes, seconds };
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown container">
      <div className="container">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountDown;
