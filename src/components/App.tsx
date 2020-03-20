import * as React from 'react';
import {ReactElement, useState} from 'react';
import TimeBar from './TimeBar';
import TaskList from './TaskList';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import {getTasks, shiftTasks} from '../storage';
import UtilityBar from './UtilityBar';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';

export interface OnUpdate {
    (): void
}

export default function App(): ReactElement {
    const [tasks, setTasks] = useState(getTasks());
    const onUpdate = () => setTasks(getTasks());
    return (
        <>
            <TimeBar/>
            <UtilityBar onTasksCleared={onUpdate}/>
            <DragDropContext onDragEnd={(result: DropResult) => updateIndices(result, onUpdate)}>
                <TaskList onUpdate={onUpdate} tasks={tasks}/>
            </DragDropContext>
        </>
    );
}

function updateIndices(result: DropResult, onUpdate: OnUpdate): void {
    if (result.destination !== null) {
        shiftTasks(result.type === 'CompletedTask', result.source.index, result.destination!.index);
        onUpdate();
    }
}