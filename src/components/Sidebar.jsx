import Button from "./Button";

export default function Sidebar({onStartAddProject}) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 md:w-72 rounded-r-xl px-8 py-16">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Seus projetos</h2>
      <div><Button onClick={onStartAddProject}>+ Adicionar Projeto</Button></div>
    </aside>
  );
}
