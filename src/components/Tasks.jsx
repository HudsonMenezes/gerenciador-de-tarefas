/* eslint-disable react/no-unescaped-entities */
import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  // CFunção para mostrar uma mensagem quando não houver tarefas e criar passo a passo para usar aplicação
  function emptyTask() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-slate-600 font-bold text-lg">
          Você não tem tarefas cadastradas
        </h2>
        <p className="text-slate-600">
          Clique no botão "Adicionar Tarefa" para criar uma nova tarefa.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length === 0 ? (
        <li className="text-slate-600">{emptyTask()}</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-white p-2 rounded-md text-left flex items-center gap-2 break-words whitespace-normal ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
