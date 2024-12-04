import Task from './task';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className="p-5 pt-0">
        {!tasks.items.length ? (
          <div>Start adding some tasks to your list.</div>
        ) : (
          tasks.items.map((task) => (
            <div key={task.id} className="mb-4">
              <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
            </div>
          ))
        )}
    </div>
  );
}