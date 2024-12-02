import Task from './task';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className="m-5">
        {tasks.map((task) => (
          <div key={task.id} className="mb-4">
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </div>
        ))}
    </div>
  );
}