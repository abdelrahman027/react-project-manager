import React, { useState } from 'react'

export default function NewTask({ onAddTask }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(ev) {
        setEnteredTask(ev.target.value)
    };

    function handleAddTask() {
        if (enteredTask.trim() === "") return;
        onAddTask(enteredTask)
        setEnteredTask('')
    };

    return (
        <div className='flex items-center gap-4' >
            <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200'
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className='text-stone-700 hover:text-stone-950'
                onClick={handleAddTask}
            >
                Add Task
            </button>
        </div>
    )
}
