import { useRef, useState } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemain, setTimeRemain] = useState(targetTime * 1000);

  const timeIsActive = timeRemain > 0 && timeRemain < targetTime * 1000;

  if (timeRemain <= 0) {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  function handleStartTimer() {
    timer.current = setInterval(() => {
      setTimeRemain((prevTimeRemain) => prevTimeRemain - 10);
    }, 10);
  }

  function handleStopTimer() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  function handleResetTimer() {
    setTimeRemain(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemain={timeRemain}
        onReset={handleResetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? "s" : ""}
        </p>
        <p>
          <button
            className="start-challenge"
            onClick={timeIsActive ? handleStopTimer : handleStartTimer}
          >
            {timeIsActive ? "Stop Timmer" : "Start Challenge"}
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Timer is running..." : "timer stopped"}
        </p>
      </section>
    </>
  );
}
