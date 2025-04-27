import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import HowToUse from "./components/HowToUse";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks@gerenciadorDeTarefas")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks@gerenciadorDeTarefas", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    console.log("newTask", newTask);
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-full h-full bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4 relative">
        <h1 className="text-2xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <div className="bottom-0 left-0 right-0 ">
          <HowToUse />
        </div>
      </div>
    </div>
  );
}

export default App;
