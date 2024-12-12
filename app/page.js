'use client';
import { useReducer } from 'react';
import AddTask from '@/components/tasks/addTask';
import TaskList from '@/components/tasks/taskList';
import Controls from '@/components/controls/controls';
import { tasksReducer } from '@/components/tasks/taskReducer';
import { initialState } from '@/data/data';

let nextId = 3;

export default function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  function handleAddTask(text) {
    if (text !== '') {
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }
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

  function handleSelectAll() {
    dispatch({
      type: 'select-all'
    });    
  }

  function handleDeleteAll() {
    dispatch({
      type: 'delete-all'
    }); 
  }

  return (
    <>
      <header className="py-3 px-5">
        <h1 className="text-xl font-semibold text-[#6247aa]">My ToDo List</h1>
      </header>
      <AddTask onAddTask={handleAddTask} />
      {tasks.items.length > 0 && 
        <Controls 
          tasks={tasks} 
          onSelectAll={handleSelectAll} 
          onDeleteAll={handleDeleteAll} 
        />}
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
