import { useRef } from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tarefas</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          Este projeto ainda não possui nenhuma tarefa.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-stone-200 p-2 mt-6">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 ">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Limpar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
