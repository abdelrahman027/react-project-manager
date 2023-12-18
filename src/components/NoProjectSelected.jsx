import React from 'react';
import emptyNote from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ handleAddProject }) {
    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={emptyNote} alt="empty task note" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className='text-stone-400 mb-4'>
                Select a Project or get started with a new one
            </p>
            <div className='mt-8'>
                <Button onClick={handleAddProject}>
                    Create New Project
                </Button>
            </div>
        </div>
    )
}
