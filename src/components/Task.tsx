import React, {ReactElement, useState} from 'react';
import {TaskData} from '../storage';
import '@rmwc/icon/icon.css';
import EditorDialog from './EditorDialog';
import TaskDataGrid from './TaskDataGrid';

export interface OnUpdate {
    (): void
}

export interface TaskProps {
    readonly taskData: TaskData
    readonly onUpdate: OnUpdate
}

export default function (props: TaskProps): ReactElement {
    const [open, setOpen] = useState(false);
    return (
        <>
            <EditorDialog open={open} taskData={props.taskData} setOpen={setOpen}/>
            <TaskDataGrid {...props} setOpen={setOpen}/>
        </>
    );
}