import image from "../assets/no-projects.png";
import Button from "./Button";

export default function FallBackScreen({onStartAddProject}) {
  return (
    <div className="mt-32 text-center w-3/4">
      <img src={image} alt="Lista de tarefas vazia" className="w-64 h-64 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-500 my-4"> Nenhum projeto selecionado </h2>
      <p className="text-stone-400 mb-4"> Selecione um projeto ou comece um novo projeto!</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}> Criar um novo projeto. </Button>
      </p>
    </div>
  );
}
