import { useRef } from "react";

export default function NewTask({ onAdd, projectId }) {
  const inputRef = useRef();

  function handleAddTask() {
    const taskData = {
      title: inputRef.current.value,
      id: Date.now(),
      projectId: projectId,
      isDone: false,
    };

    if (inputRef.current.value.trim() === "") {
      return;
    }

    onAdd(taskData);

    inputRef.current.value = "";
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={inputRef}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
