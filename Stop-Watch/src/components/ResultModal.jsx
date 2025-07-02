import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({ ref, timeRemain, targetTime, onReset }) {
  const dialogRef = useRef();

  const formattedTimeRemain = (timeRemain / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      showModal: () => {
        dialogRef.current.showModal();
      },
      close: () => {
        dialogRef.current.close();
      },
    };
  });

  return createPortal(
    <>
      <dialog ref={dialogRef} className="result-modal">
        {timeRemain <= 0 ? <h2>you lost</h2> : <h2>you won</h2>}
        <p>
          the target time was <strong>{targetTime}</strong> seconds
        </p>
        <p>
          you stop the timmer with
          <strong>{formattedTimeRemain} second left</strong> seconds
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
