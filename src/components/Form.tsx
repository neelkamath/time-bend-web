import {deleteTask, TaskData} from '../storage';
import Submit from './Submit';
import TaskDataInput from './TaskDataInput';
import React, {ReactElement, useState} from 'react';
import CustomButton from './CustomButton';

export interface FormProps {
    readonly taskData?: TaskData
    readonly onSubmit: () => void
}

export default function (props: FormProps): ReactElement {
    const [task, setTask] = useState(props.taskData?.task);
    const [duration, setDuration] = useState(props.taskData?.duration);
    return (
        <form>
            <TaskDataInput task={task} duration={duration} setTask={setTask} setDuration={setDuration}/>
            <br/>
            <Submit onSubmit={props.onSubmit} taskData={props.taskData} task={task} duration={duration}/>
            <Delete {...props}/>
        </form>
    );
}

function Delete(props: FormProps): ReactElement {
    let deleteButton = <></>;
    const data = props.taskData;
    if (data !== undefined)
        deleteButton = (
            <>
                <br/>
                <br/>
                <CustomButton label='delete' onClick={() => deleteTask(data)}/>
            </>
        );
    return deleteButton;
}