/* eslint-disable react/no-unescaped-entities */

export default function HowToUse() {
  // Criar um passo a passo de como usar a aplicação e exibir para o usuário na tela
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <div className="flex flex-col items-center">
        <h2 className="text-slate-600 font-bold text-lg">
          Como usar o Gerenciador de Tarefas:
        </h2>
        <li className="text-slate-600">
          Clique sobre o botão "Adicionar Tarefa" para criar uma nova tarefa.
        </li>
        <li className="text-slate-600">
          Ao clicar sobre uma tarefa, você pode marcá-la como concluída, ao
          clicar novamente ela será desmarcada.
        </li>
        <li className="text-slate-600">
          Clique sobre o botão "Ver Detalhes" para ver mais informações sobre a
          tarefa.
        </li>
        <li className="text-slate-600">
          Clique sobre o botão "Excluir" para remover a tarefa da lista.
        </li>
      </div>
    </div>
  );
}
