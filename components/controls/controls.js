import { useEffect, useState } from 'react';
import AlertModal from '@/components/alert/alertModal';
import { Button } from '@/components/ui/button';

export default function Controls({ onSelectAll, onDeleteAll, tasks }) {
    const [allSelected, setAllSelected] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function handleSelectAll() {
        setAllSelected((prev) => !prev);
        onSelectAll();
    }

    function handleDeleteAll() {
        setAllSelected(false);
        onDeleteAll();  
        setIsOpen(false);     
    }

    function handleConfirmDelete() {
        setIsOpen(true);
    }

    useEffect(() => {
        Object.values(tasks.items).some((val) => val.done === true) 
            ? setIsDisabled(false) : setIsDisabled(true);
    }, [tasks]);

    return (
        <div className="p-5 pt-0 flex justify-between">
            <div>
                <Button 
                    className="bg-[#a06cd5] text-white 
                    hover:bg-[#6247aa] hover:text-white"
                    variant="outline" 
                    onClick={handleSelectAll}>
                    {allSelected ? 'Uncheck All' : 'Mark All Complete'}
                </Button>
            </div>
            <div>
                <Button 
                    className="disabled:opacity-25 bg-[#a06cd5] 
                    text-white hover:bg-[#6247aa] hover:text-white"
                    variant="outline"
                    onClick={handleConfirmDelete}
                    disabled={isDisabled}>
                    Delete Complete Tasks
                </Button> 
            </div>
            <AlertModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                onDelete={handleDeleteAll} 
            />
        </div>
    )
}