import { useAppSelector } from "@/redux/features/hook";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <h1>This is task</h1>
    </div>
  );
};

export default Task;
