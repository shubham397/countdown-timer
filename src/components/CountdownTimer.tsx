import React, { useEffect, useState } from "react";
import "./countdownTimer.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <span className="count">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="countdown-box">
        <span className="count">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="countdown-box">
        <span className="count">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="countdown-box">
        <span className="count">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
