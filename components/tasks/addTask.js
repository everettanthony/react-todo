import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    function handleEnterKeyPress(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            setText('');
            onAddTask(e.target.value);
        }
    }

    return (
        <div className="flex mb-5 px-5">
            <Input
                type="text"
                placeholder="Add task"
                className="px-5 h-10 rounded-none bg-[#ecdcf3] focus-visible:ring-0
                placeholder:text-[#b17fe4] focus:placeholder:text-transparent border-r-0"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleEnterKeyPress}
            />
            <Button 
                variant="outline"
                className="h-10 rounded-none bg-[#a06cd5] 
                text-white hover:bg-[#6247aa] hover:text-white"
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