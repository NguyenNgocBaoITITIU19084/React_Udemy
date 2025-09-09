import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onHandleInput, onHandleCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueToRef = useRef();

  const dialogRef = useRef();

  function handleSaveButton() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueTo = dueToRef.current.value;

    // validation input
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueTo.trim() === ""
    ) {
      // show the dialog
      dialogRef.current.open();
      return;
    }

    onHandleInput({
      title,
      description,
      dueTo,
    });
  }

  return (
    <>
      <Modal ref={dialogRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops... it look like you miss some entered input
        </p>
        <p className="text-stone-400 mb-4">Please entered all input fields</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 mb-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onHandleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveButton}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} title="Title" type="text" />
          <Input ref={descriptionRef} title="Description" isTextArea={true} />
          <Input ref={dueToRef} title="Due To" type="date" />
        </div>
      </div>
    </>
  );
}
