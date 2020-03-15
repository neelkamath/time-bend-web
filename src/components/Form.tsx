import {TaskData} from '../storage';
import Submit from './Submit';
import TaskDataInput from './TaskDataInput';
import React, {ReactElement, useState} from 'react';

export interface FormProps {
    readonly taskData?: TaskData
}

export default function (props: FormProps): ReactElement {
    const [task, setTask] = useState(props.taskData?.task);
    const [duration, setDuration] = useState(props.taskData?.duration);
    return (
        <form>
            <TaskDataInput task={task} duration={duration} setTask={setTask} setDuration={setDuration}/>
            <br/>
            <Submit taskData={props.taskData} task={task} duration={duration}/>
        </form>
    );
}