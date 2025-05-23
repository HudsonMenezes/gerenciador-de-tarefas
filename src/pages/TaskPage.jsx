import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="absolute left-0 top-0 p-2 bg-slate-400 rounded-md text-white"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-2xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600 break-words whitespace-pre-wrap">
            {title}
          </h2>
          <p className="text-slate-600 break-words whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
