import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd, onCancel}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDate = date.current.value

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        date: enteredDate
    });
  }

  return (
    <div className="w-[35rem] md:w-[50rem] mt-8">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={handleSave} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-200 hover:bg-stone-600 hover:text-stone-100">
            Salvar
          </button>
        </li>
        <li>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
          >
            Cancelar
          </button>
        </li>
      </menu>
      <div className="flex flex-col gap-6">
        <Input type="text" ref={title} className="bg-stone-400 p-3 w-full" title="Titulo" />
        <Input
          ref={description}
          className="bg-stone-400 px-3 py-16 w-full"
          title="Descrição"
          textarea
        />
        <Input type="date" ref={date} className="bg-stone-400 p-3 w-1/3" title="Data" />
      </div>
    </div>
  );
}
