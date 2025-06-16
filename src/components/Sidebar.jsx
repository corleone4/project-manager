import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 md:w-72 rounded-r-xl px-8 py-16">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Seus projetos
      </h2>
      <div>
        <Button extraClasses={"mb-4"} onClick={onStartAddProject}>
          + Adicionar Projeto
        </Button>
      </div>

      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left md:text-base text-xs px-4 py-2 rounded-md my-1 hover:text-stone-100 hover:bg-stone-900";

          if (project.id === selectedProjectId) {
            cssClasses += "text-stone-200 bg-stone-800";
          } else {
            cssClasses += "text-stone-400 bg-stone-900 hover:bg-stone-950";
          }

          return (
            <li className="mt-1" key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
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
