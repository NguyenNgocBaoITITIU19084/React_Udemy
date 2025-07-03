import { useRef } from "react";

import Input from "./Input";

export default function NewProject({ onHandleInput }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueToRef = useRef();

  function handleSaveButton() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueTo = dueToRef.current.value;

    onHandleInput({
      title,
      description,
      dueTo,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 mb-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
