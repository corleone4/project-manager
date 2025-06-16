import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import dangerImg from "../assets/danger.png"
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} className="flex items-center justify-center" buttonCaption={"Fechar"}>
        <img className="w-24 m-auto h-24" src={dangerImg}/>
        <h2 className="mt-4 text-2xl text-center font-bold"> Dados Inválidos!</h2>
        <p className="my-6"> Preencha novamente os dados! </p>
      </Modal>
      <div className="w-[35rem] md:w-[50rem] mt-8">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-200 hover:bg-stone-600 hover:text-stone-100"
            >
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
          <Input
            type="text"
            ref={title}
            className="bg-stone-400 p-3 w-full"
            title="Titulo"
          />
          <Input
            ref={description}
            className="bg-stone-400 px-3 py-16 w-full"
            title="Descrição"
            textarea
          />
          <Input
            type="date"
            ref={date}
            className="bg-stone-400 p-3 w-1/3"
            title="Data"
          />
        </div>
      </div>
    </>
  );
}
