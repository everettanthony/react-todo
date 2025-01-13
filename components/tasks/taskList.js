import { useEffect, useState } from 'react';
import Task from './task';
import { Button } from '@/components/ui/button';
import { LuArrowUpAZ, LuArrowDownAZ } from "react-icons/lu";

export default function TaskList({ tasks, onChangeTask, onDeleteTask, onSortTask }) {
  const [sortOrder] = useState(tasks.sortOrder);

  return (
    <div className="p-5 pt-0">
        {!tasks.items.length ? (
          <div>Start adding some tasks to your list.</div>
        ) : (
          <div>
            <div>
              <Button 
                className="bg-transparent text-[#09090b] border-none 
                hover:bg-transparent hover:text-[#09090b] p-0 shadow-none"
                variant="outline" 
                onClick={() => onSortTask('text')}>
                Name {sortOrder === 'asc' ? <LuArrowUpAZ /> : <LuArrowDownAZ />}
              </Button>          
            </div>
            {tasks.items.map((task) => (
              <div key={task.id} className="[&:not(:last-child)]:mb-4">
                <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
              </div>
            ))}
          </div>
        )}
    </div>
  );
}