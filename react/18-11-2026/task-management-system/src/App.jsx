import { useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  return (
    <main className="w-screen h-screen bg-[#f8fafd] px-3 py-2">
      <Header setOpenAddTask={setOpenAddTask} />
      <SearchSection />
      <TaskList setOpenEditTask={setOpenEditTask} />
      <TaskForm
        open={openAddTask}
        setOpen={setOpenAddTask}
        title={"Add Task"}
      />
      <TaskForm
        open={openEditTask}
        setOpen={setOpenEditTask}
        title={"Edit Task"}
      />
    </main>
  );
}

export default App;
