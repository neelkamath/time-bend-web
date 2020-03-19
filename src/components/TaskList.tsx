import React, {ReactElement} from 'react';
import TaskCreator from './TaskCreator';
import {TaskData} from '../storage';
import {OnUpdate} from './App';
import DraggableTask from './DraggableTask';

export interface TaskListProps {
    tasks: TaskData[]
    onUpdate: OnUpdate
}

export default function TaskList(props: TaskListProps): ReactElement {
    return (
        <>
            {createTasks(props.tasks, props.onUpdate, false)}
            <TaskCreator onUpdate={props.onUpdate}/>
            {createTasks(props.tasks, props.onUpdate, true)}
        </>
    );
}

function createTasks(tasks: TaskData[], onUpdate: OnUpdate, completed: boolean): ReactElement[] {
    return tasks
        .filter((value: TaskData) => value.completed === completed)
        .map((value: TaskData, index: number) => <DraggableTask task={value} onUpdate={onUpdate} index={index}/>);
}