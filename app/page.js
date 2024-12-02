'use client';
import { useReducer } from 'react';
import AddTask from '@/components/tasks/addTask';
import TaskList from '@/components/tasks/taskList';
import { tasksReducer } from '@/components/tasks/taskReducer';
import { initialTasks } from '@/data/data';

export default function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  let nextId = 3;

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <header className="py-3 px-5">
        <h1 className="text-xl font-semibold">My ToDo List</h1>
      </header>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
