import {deleteTask, TaskData} from '../storage';
import Submit from './Submit';
import TaskDataInput from './TaskDataInput';
import React, {ReactElement, useState} from 'react';
import CustomButton from './CustomButton';

export interface FormProps {
    readonly taskData?: TaskData
    readonly onSubmit: () => void
}

export default function Form(props: FormProps): ReactElement {
    const [action, setAction] = useState(props.taskData?.action);
    const [duration, setDuration] = useState(props.taskData?.duration);
    return (
        <>
            <form>
                <TaskDataInput action={action} duration={duration} setAction={setAction} setDuration={setDuration}/>
                <br/>
                <Submit onSubmit={props.onSubmit} taskData={props.taskData} action={action} duration={duration}/>
            </form>
            <Delete {...props}/>
        </>
    );
}

function Delete(props: FormProps): ReactElement {
    let deleteButton = <></>;
    const data = props.taskData;
    if (data !== undefined)
        deleteButton = (
            <>
                <br/>
                <CustomButton
                    label='delete'
                    onClick={
                        () => {
                            deleteTask(data);
                            props.onSubmit();
                        }
                    }
                />
            </>
        );
    return deleteButton;
}