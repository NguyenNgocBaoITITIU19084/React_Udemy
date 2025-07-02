import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [expireTime, setExpireTime] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStartTimer() {
    timer.current = setInterval(() => {
      setExpireTime(true);
      setTimerStarted(false);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStopTimer() {
    clearInterval(timer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {expireTime && <p>you lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 0 ? "s" : ""}
      </p>
      <p>
        <button
          className="start-challenge"
          onClick={timerStarted ? handleStopTimer : handleStartTimer}
        >
          {timerStarted ? "Stop Timmer" : "Start Challenge"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running..." : "timer stopped"}
      </p>
    </section>
  );
}
