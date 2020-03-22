import {default as React, ReactElement, useState} from 'react';
import {OnUpdate} from './App';
import CustomButton from './CustomButton';
import CustomDialog from './CustomDialog';
import {deleteAllTasks, deleteCompletedTasks} from '../storage';

export interface TaskClearerProps {
    readonly onClear: OnUpdate
}

export default function TaskClearer(props: TaskClearerProps): ReactElement {
    const [open, setOpen] = useState(false);
    const onClick = (completed: boolean) => {
        completed ? deleteCompletedTasks() : deleteAllTasks();
        setOpen(false);
        props.onClear();
    };
    return (
        <>
            <CustomDialog open={open} setOpen={setOpen}>
                <CustomButton label='clear completed' onClick={() => onClick(true)}/>
                <br/>
                <br/>
                <CustomButton label='clear all' onClick={() => onClick(false)}/>
            </CustomDialog>
            <CustomButton label='clear' onClick={() => setOpen(true)}/>
        </>
    );
}