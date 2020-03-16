import React, {ReactElement} from 'react';
import Task from './Task';
import TaskCreator from './TaskCreator';
import {TaskData} from '../storage';
import {OnUpdate} from './App';

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
        .map((value: TaskData) => <Task key={value.created} taskData={value} onUpdate={onUpdate}/>);
}