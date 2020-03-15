import React, {ReactElement, useState} from 'react';
import Task, {OnUpdate} from './Task';
import TaskCreator from './TaskCreator';
import {getTasks, TaskData} from '../storage';

export default function (): ReactElement {
    const [tasks, setTasks] = useState(getTasks());
    const onUpdate = () => setTasks(getTasks());
    return (
        <>
            {createTasks(tasks, onUpdate, false)}
            <TaskCreator/>
            {createTasks(tasks, onUpdate, true)}
        </>
    );
}

function createTasks(tasks: TaskData[], onUpdate: OnUpdate, completed: boolean): ReactElement[] {
    return tasks
        .filter((value: TaskData) => value.completed === completed)
        .map((value: TaskData) => <Task key={value.created} taskData={value} onUpdate={onUpdate}/>);
}