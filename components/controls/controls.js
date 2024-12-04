import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Controls({ onSelectAll }) {
    const [allSelected, setAllSelected] = useState(false);

    function handleSelectAll() {
        setAllSelected((prev) => !prev);
        onSelectAll();
    }

    return (
        <div className="p-5 flex justify-between">
            <div>
                <Button variant="outline" onClick={handleSelectAll}>
                    {/* TODO: update button text after deselecting all invidually */}
                    {allSelected ? 'Deselect All' : 'Select All'}
                </Button>
            </div>
            <div>
                <Button variant="outline">
                    Mark Selected Complete
                </Button> 
                <Button variant="outline">
                    Delete Complete Tasks
                </Button> 
            </div>
        </div>
    )
}