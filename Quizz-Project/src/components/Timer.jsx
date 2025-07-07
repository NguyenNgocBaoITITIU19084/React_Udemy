import { useEffect, useState } from "react";

export default function Timer({ onTimeOut, timer }) {
  const [remainingTimer, setRemainingTimer] = useState(timer);

  useEffect(() => {
    const time = setTimeout(onTimeOut, timer);
    return () => {
      clearTimeout(time);
    };
  }, [onTimeOut, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimer((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timer} value={remainingTimer} />;
}
