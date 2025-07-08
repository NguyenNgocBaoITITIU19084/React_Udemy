import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTime }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const handleTimeout = setTimeout(onTime, timeout);

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [onTime, timeout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
}
