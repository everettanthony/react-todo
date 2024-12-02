import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    return (
        <div className="flex">
            <Input
                type="text"
                placeholder="Add task"
                className="px-5 h-10 rounded-none focus-visible:ring-0
                focus:bg-accent focus:placeholder:text-transparent border-r-0"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button 
                variant="outline"
                className="h-10 rounded-none"
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}
            >
                Add
            </Button>
        </div>
    );
}