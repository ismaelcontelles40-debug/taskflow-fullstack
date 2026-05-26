import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-8 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            TaskFlow
          </Link>

          <div className="flex gap-6 text-slate-300">
            <Link to="/" className="hover:text-white">
              Inicio
            </Link>

            <Link to="/tasks" className="hover:text-white">
              Tareas
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;