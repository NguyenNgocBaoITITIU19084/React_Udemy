import Task from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddNewTask,
  onDeleteTask,
  onDoneTask,
  onNotYet,
  tasks,
}) {
  const formattedDate = new Date(project.dueTo).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-8 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task
        onAdd={onAddNewTask}
        onDelete={onDeleteTask}
        onDone={onDoneTask}
        onNotYet={onNotYet}
        projectId={project.id}
        tasks={tasks}
      />
    </div>
  );
}
