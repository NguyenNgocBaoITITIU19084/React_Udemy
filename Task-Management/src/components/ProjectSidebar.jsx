import Button from "./Button";

export default function ProjectSidebar({
  onAddNewProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-500 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-50";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-50";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id} className="my-2">
              <button
                className={cssClasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
