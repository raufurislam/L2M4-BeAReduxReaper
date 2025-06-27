import TaskCard from "@/components/module/tasks/TaskCard";
import { useAppSelector } from "@/redux/features/hook";
import { selectTask } from "@/redux/features/task/taskSlice";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  // console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <h1 className="font-bold">Task</h1>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
