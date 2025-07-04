import NewTask from "./NewTask";

export default function Task({
  onAdd,
  onDelete,
  onDone,
  onNotYet,
  projectId,
  tasks,
}) {
  const taskBelongsToProject = tasks.filter(
    (task) => task.projectId === projectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} projectId={projectId} />
      {taskBelongsToProject.length === 0 && (
        <p>
          This project does not yet have any tasks. You can add a new task using
          the form above.
        </p>
      )}

      {taskBelongsToProject.length > 0 && (
        <ul>
          {taskBelongsToProject.map((task) => {
            let cssClass = "text-stone-600";
            if (task.isDone === true) {
              cssClass += " line-through";
            }
            return (
              <li
                key={task.id}
                className="flex items-center justify-between p-2 mb-2 bg-stone-100 rounded-sm"
              >
                <span className={cssClass}>{task.title}</span>
                <div className="flex items-center justify-between gap-4">
                  {task.isDone ? (
                    <button
                      onClick={() => onNotYet(task.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Not Yet
                    </button>
                  ) : (
                    <button
                      onClick={() => onDone(task.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Done
                    </button>
                  )}

                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
