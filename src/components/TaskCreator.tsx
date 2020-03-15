import React, {ReactElement, useState} from 'react';
import {CustomButton} from './CustomButton';
import {CreateTaskDialog} from './CreateTaskDialog';

export default function TaskCreator(): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CreateTaskDialog open={open} setOpen={setOpen}/>
            <CustomButton label='↓ new task' onClick={() => setOpen(true)}/>
        </>
    );
}