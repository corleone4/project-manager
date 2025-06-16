import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const text = useRef();
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    const enteredText = text.current.value;

    if (enteredText.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="felx items-center gap-4">
      <Modal
        ref={modal}
        className="flex items-center justify-center"
        buttonCaption={"Fechar"}
      >
        <h2 className="my-4 text-2xl text-center font-bold">
          Tarefa vazia, tente novamente!
        </h2>
      </Modal>
      <input
        ref={text}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick} extraClasses="ml-2">
        Adicionar Tarefa
      </Button>
    </div>
  );
}
