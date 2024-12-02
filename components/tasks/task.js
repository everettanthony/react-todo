import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

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
        <div className={`task-content ${task.done ? 'label-done' : ''}`}>
          {task.text}
        </div>
        <Button 
          variant="outline"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    );
  }

  return (
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
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </label>
  );
}
