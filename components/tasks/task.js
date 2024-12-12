import { useState } from 'react';
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
          className="task-update bg-[#ecdcf3] focus-visible:ring-[#a06cd5]"
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
          className="bg-[#a06cd5] text-white 
          hover:bg-[#6247aa] hover:text-white"
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
          className="ml-auto bg-[#a06cd5] text-white 
          hover:bg-[#6247aa] hover:text-white"
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
          className="bg-[#e2cfea] data-[state=checked]:text-white 
          data-[state=checked]:bg-[#a06cd5] border-[#6247aa]"
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
          className="bg-[#a06cd5] text-white 
          hover:bg-[#6247aa] hover:text-white"
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
