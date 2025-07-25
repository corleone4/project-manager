import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption}, ref) {
    const dialog = useRef();
    useImperativeHandle((ref),() => {
        return {
        open() {
            dialog.current.showModal(ref);
        },
        };
    });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-950/90 p-4 rounded-md shadow-md">
        {children}
        <form type="dialog"><Button>{buttonCaption}</Button></form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
