import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import AlertModal from '@/components/alert/alertModal';

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let taskContent;

  function handleConfirmDelete() {
    setIsOpen(true);
  }

  if (isEditing) {
    taskContent = (
      <>
        <Input 
          className="task-update"
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button 
          variant="outline"
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <div className={`task-content ${task.done ? 'line-through' : ''}`}>
          {task.text}
        </div>
        <Button 
          className="ml-auto"
          variant="outline"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    );
  }

  return (
    <>
      <label className="flex items-center gap-x-2">
        <Checkbox 
          checked={task.done}
          onCheckedChange={(checked) => {
            onChange({
              ...task,
              done: checked,
            });
          }}
        />
        {taskContent}
        <Button 
          variant="outline"
          onClick={handleConfirmDelete}
        >
          Delete
        </Button>
      </label>  
      <AlertModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onDelete={() => onDelete(task.id)} 
      />
    </>
  );
}
