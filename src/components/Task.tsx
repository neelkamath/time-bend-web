import React, {ReactElement, useState} from 'react';
import {TaskData} from '../storage';
import '@rmwc/icon/icon.css';
import EditorDialog from './EditorDialog';
import TaskDataGrid from './TaskDataGrid';
import {OnUpdate} from './App';

export interface TaskProps {
    readonly taskData: TaskData
    readonly onUpdate: OnUpdate
}

export default function Task(props: TaskProps): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <EditorDialog onUpdate={props.onUpdate} open={open} taskData={props.taskData} setOpen={setOpen}/>
            <TaskDataGrid {...props} setOpen={setOpen}/>
        </>
    );
}