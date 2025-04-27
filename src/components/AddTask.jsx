import { useState } from "react";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTaskSubmit(title, description) {
    if (!title.trim() || !description.trim()) {
      alert("Preencha o título e a descrição da tarefa");
      return;
    }

    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-300 outline-slate-400 bg-white px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-300 outline-slate-400  bg-white px-4 py-2 rounded-md"
      />
      <button
        onClick={() => handleTaskSubmit(title, description)}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
