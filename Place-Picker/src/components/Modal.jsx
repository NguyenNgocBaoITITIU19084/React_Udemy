import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open }) {
  const dialog = useRef();
  console.log("prepare for mounting");

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
      {console.log("mounted")}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
