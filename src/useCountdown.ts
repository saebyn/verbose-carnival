import { useState, useEffect } from "react";

export default function useCountdown(timeSeconds: number) {
  const [countdown, setCountdown] = useState(timeSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const reset = () => setCountdown(timeSeconds);

  const changeTime = (newTime: number) => {
    setCountdown(newTime);
  };

  return {
    value: countdown,

    reset,
    changeTime,
  };
}
